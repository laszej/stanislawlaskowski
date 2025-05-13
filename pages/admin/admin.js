import AdminComments from "../../components/AdminComments";

const AdminPage = () => {
  return (
    <div className="container">
      <h1 className="text-center my-4">Panel administracyjny</h1>
      <AdminComments collection="devSiteGeneral" />
    </div>
  );
};

export default AdminPage;