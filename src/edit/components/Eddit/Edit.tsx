import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "@config/firebaseConfig";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { IDataEdit } from "@edit/components/Eddit/Edit.interfaces";
import { useEffect } from "react";
import style from "@edit/components/Eddit/Edit.module.css";

export const Edit = () => {

    const { register, handleSubmit, formState: {errors}, reset } = useForm<IDataEdit>();
    const navigate = useNavigate();

    const {id} = useParams();
    const citaCollection = collection(db, "Citas");

    const ShowUpdate = async () => {
        const citaDoc = doc(citaCollection, id);
        const docSnap = await getDoc(citaDoc);
        const data = docSnap.data();
        reset(data);
    }

    useEffect(() => {
        ShowUpdate();
    }, []);

    const update = async (data: IDataEdit) => {
        const citaDoc = doc(citaCollection, id);
        await updateDoc(citaDoc, {
            Nombre: data.Nombre,
            Apellido: data.Apellido,
            Cita: new Date(data.Cita),
        });
        navigate("/dashboard");
    }
  
  return (
    <>
        <h2 className={style.title}>Actualizar Cita</h2>

        <form className={style.form} onSubmit={handleSubmit(update)}>
                <input
                    type="text"
                    placeholder="Nombre"
                    {...register("Nombre", { required: true, minLength: 3, maxLength: 40 })}
                />
                {errors.Nombre && <span>{errors.Nombre.type === "required" ? "El nombre es requerido" : errors.Nombre.type === "minLength" ? "El nombre es muy corto" : "El nombre es muy largo"}</span>}

                <input
                    type="text"
                    placeholder="Apellido"
                    {...register("Apellido", { required: true, minLength: 3, maxLength: 40 })}
                />
                {errors.Apellido && <span>{errors.Apellido.type === "required" ? "El apellido es requerido" : errors.Apellido.type === "minLength" ? "El apellido es muy corto" : "El apellido es muy largo"}</span>}

                <input
                    type="datetime-local"
                    {...register("Cita", { required: true })}
                />
                {errors.Cita && <span>La fecha y hora son requeridas</span>}

                <button type="submit">Editar Cita</button>
            </form>
    </>
  )
}