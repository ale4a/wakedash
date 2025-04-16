import NavbarComponent from "@/components/common/Navbar";

export default function RestaurantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarComponent />
      {children}
    </>
  );
}
