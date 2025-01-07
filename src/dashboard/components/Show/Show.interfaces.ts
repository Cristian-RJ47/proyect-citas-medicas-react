export interface ICita {
    id: string;
    Nombre: string | null;
    Apellido: string | null;
    Cita: {
        toLocaleTimeString(): import("react").ReactNode;
        toLocaleDateString(): import("react").ReactNode; seconds: number; nanoseconds: number 
    };
}
