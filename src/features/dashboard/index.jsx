import Layout from "../../layout";
import Pagination from "../../components/pagination";
import data from "../../data";
import { Button } from "@mui/material";

const Dashboard = () => {
  return (
    <Layout
      header={{
        title: "Articles and Announcements",
        action: <Button sx={{ color: "#fff" }}>Login</Button>,
      }}
    >
      <Pagination data={data} />
    </Layout>
  );
};

export default Dashboard;
