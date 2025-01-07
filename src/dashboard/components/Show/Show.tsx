import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "@config/firebaseConfig";
import { useEffect, useState } from "react";
import { ICita } from "@dashboard/components/Show/Show.interfaces";
import { Link } from "react-router-dom";
import style from "@dashboard/components/Show/Show.module.css";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MySwal = withReactContent(Swal);

export const Show = () => {
    const [citas, setCitas] = useState<ICita[]>([]);

    const citasCollection = collection(db, "Citas");

    const getCitas = async () => {
        const data = await getDocs(citasCollection);
        const citasList: ICita[] = data.docs.map(doc => {
            const citaData = doc.data();

            return {
              id: doc.id,
              Nombre: citaData.Nombre,
              Apellido: citaData.Apellido,
              Cita: citaData.Cita && citaData.Cita.seconds
                ? new Date(citaData.Cita.seconds * 1000)
                : null
            } as unknown as ICita;
        });

        setCitas(citasList);
    };

    const deleteCita = async (id: string) => {
      const citaDoc = doc(db, "Citas", id);
      await deleteDoc(citaDoc)
      getCitas();
    }

    const confirmDelete = (id: string, Nombre: string, Apellido: string ) => {
      Swal.fire({
        title: `Estás seguro de eliminar la cita con ${Nombre} ${Apellido}?`,
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: `Yes, delete id!`,
      }).then((result) => {
        if (result.isConfirmed) {
          deleteCita(id);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
    }

    useEffect(() => {
        getCitas();
    }, []);

    return (
        <>
          <h3 className={style.title}>Citas</h3>
          <div className={style.container}>
            {citas.length > 0 ? (
            <table className={style.table}>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Fecha de Cita</th>
                  <th>Hora de Cita</th>
                </tr>
              </thead>
              <tbody>
                {citas.map(cita => (
                  <tr key={cita.id}>
                    <td>{cita.Nombre? cita.Nombre : "No disponible"}</td>
                    <td>{cita.Apellido? cita.Apellido : "No disponible"}</td>
                    <td>{cita.Cita ? cita.Cita.toLocaleDateString() : "No disponible"}</td>
                    <td>{cita.Cita? cita.Cita.toLocaleTimeString() : "No disponible"}</td>
                    <td>
                      <Link className={style.editar} to={`/edit/${cita.id}`}>Editar</Link>
                      <button 
                      className={style.delete}
                      onClick={
                        () => { confirmDelete(cita.id, cita.Nombre || "No disponible", cita.Apellido || "No disponible")
                      } }>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            ) : (
              <h3>Loading...</h3>
            )}
          </div>
        </>
    );
};
