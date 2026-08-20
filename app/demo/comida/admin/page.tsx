import AdminClient from "./AdminClient";

export const metadata = {
  title: "Panel de Administración | Demo Gastronómica | WebLab",
  description: "Panel de control administrativo privado de simulación. Agregá productos, editá precios, marcá sin stock y visualizá los cambios en la tienda al instante.",
  keywords: ["panel admin","gestión de stock","cambio de precios","autoadministrable"],
};

export default function Page() {
  return <AdminClient />;
}
