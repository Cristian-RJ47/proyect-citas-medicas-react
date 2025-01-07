import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { db } from "@config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { IData } from "@create/components/Create/Create.interfaces";
import style from "@create/components/create/Create.module.css";

export const Create = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IData>();
    const navigate = useNavigate();
    const CitasCollection = collection(db, "Citas");

    const store = async (data: IData) => {
        try {
            await addDoc(CitasCollection, {
                Nombre: data.Nombre,
                Apellido: data.Apellido,
                Cita: new Date(data.Cita),
            });
            reset();
            navigate("/dashboard");
        } catch (error) {
            console.error("Error al guardar la cita:", error);
        }
    };

    return (
        <>
            <h2 className={style.title}>Crear Cita</h2>
            <form className={style.form} onSubmit={handleSubmit(store)}>
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

                <button type="submit">Agendar Cita</button>
            </form>
        </>
    );
};
