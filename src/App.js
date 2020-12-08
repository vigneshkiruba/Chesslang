import React, { Component } from "react";
import "./App.css";
import properties from "./properties.json";
import {
  Layout,
  Menu,
  Avatar,
  Button,
  PageHeader,
  Typography,
  Badge,
} from "antd";
import {
  MessageOutlined,
  HomeFilled,
  HomeOutlined,
  AndroidOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  createFromIconfontCN,
} from "@ant-design/icons";
import Assessment from "./component/assessment";

const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    const data = properties;
    console.log(data);
    this.setState({ data: data });
  }
  render() {
    return (
      <Layout>
        <Header className="site-layout-sub-header-background">
          <div className="Row">
            <div className="Column">
              {" "}
              <Avatar
                className="avatar"
                size={{ xs: 28, sm: 35, md: 44, lg: 54, xl: 70, xxl: 85 }}
                src="./logo1.png"
              />
              <Title className="title" level={3}>
                Assessment
              </Title>
            </div>
            <div className="Column">
              <PageHeader
                title=""
                extra={[
                  <Button className="assessment-button" key="1" type="primary">
                    Create Assessment
                  </Button>,
                  <Badge dot>
                    <MessageOutlined className="notify" />
                  </Badge>,
                ]}
              ></PageHeader>
            </div>
          </div>
        </Header>
        <Layout>
          <Sider
            className="slider"
            onBreakpoint={(broken) => {}}
            onCollapse={(collapsed, type) => {}}
          >
            <Menu className="menu" mode="vertical" defaultSelectedKeys={["1"]}>
              <Menu.Item className="menu" key="1" icon={<HomeFilled />} />
              <Menu.Item
                className="menu"
                key="2"
                icon={<VideoCameraOutlined />}
              />
              <Menu.Item className="menu" key="3" icon={<UploadOutlined />} />
              <Menu.Item className="menu" key="4" icon={<UserOutlined />} />
              <Menu.Item className="menu" key="5" icon={<AndroidOutlined />} />
              <Menu.Item
                className="menu"
                key="6"
                icon={<VideoCameraOutlined />}
              />
              <Menu.Item className="menu" key="7" icon={<UploadOutlined />} />
              <Menu.Item className="menu" key="8" icon={<UserOutlined />} />
              <Menu.Item className="menu" key="9" icon={<HomeOutlined />} />
              <Menu.Item
                className="menu"
                key="10"
                icon={<VideoCameraOutlined />}
              />
              <Menu.Item className="menu" key="11" icon={<UploadOutlined />} />
              <Menu.Item className="menu" key="12" icon={<AndroidOutlined />} />
              <Menu.Item className="menu" key="13" icon={<HomeOutlined />} />
            </Menu>
          </Sider>
          <Content className="content">
            <div className="site-layout-background">
              <Assessment data={this.state.data} />
            </div>
          </Content>
        </Layout>
        <Footer className="footer-tag">
          <IconFont type="icon-tuichu" />
        </Footer>
      </Layout>
    );
  }
}

export default App;
