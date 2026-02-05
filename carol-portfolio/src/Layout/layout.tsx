import Header from "../containers/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "60px" }}>
        {children}
      </main>
    </>
  );
}
