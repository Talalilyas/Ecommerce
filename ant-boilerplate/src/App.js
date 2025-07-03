import { Flex, Layout } from "antd";
import MyHeader from "./Header"; 

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Flex gap="middle" wrap>
      <Layout>
       
          <MyHeader />
      
      </Layout>
    </Flex>
  );
}
export default App;