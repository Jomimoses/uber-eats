import React, { Component, Fragment } from "react";
import { Breadcrumb, Row, Col, Button, Divider, Tabs, Menu } from "antd";
import {
  HomeOutlined,
  HeartFilled,
  FacebookFilled,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

import { faWallet, faAngleDown, faLifeRing } from "@fortawesome/free-solid-svg-icons";
import CommonHeader from "../../layout/header";
import Circle from "../../circle";
import labels from "../../../config/static/lables";
import dish from "../../../assets/images/dish.png";

const { TabPane } = Tabs;
const { SubMenu } = Menu;

const label = labels.en;

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() { }

  renderHeader = () => {
    return (
      <div className="bg-gray">
        <Breadcrumb>
          <Breadcrumb.Item onClick={(e) => console.log("sss------>>>>,", e)}>
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item>{label.istanbul}</Breadcrumb.Item>
          <Breadcrumb.Item>{label.beam}</Breadcrumb.Item>
          <Breadcrumb.Item>
            {label.beam} ({label.center})
          </Breadcrumb.Item>
          <Breadcrumb.Item>{label.dishName}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  };

  renderFavourite = () => {
    return (
      <Row className="margin-v-3">
        <Col span={4}>
          <img className="img-dish" src={dish} />
        </Col>
        <Col span={20}>
          <Row>
            <Col span={8}>
              <h2>{label.dishDetails}</h2>
            </Col>
            <Col className="space-between" span={9} offset={7}>
              <Button
                className="bg-secondary"
                icon={<HeartFilled style={{ color: "red" }} />}
              >
                {label.favourite}
              </Button>

              <Button className="bg-secondary">{label.share}</Button>
              <Button type="primary" icon={<FacebookFilled />}>
                {label.like} (1.7k)
              </Button>
            </Col>
          </Row>
          <p>Kebab, Turk mutfagi</p>
          <Row>
            <Col span={4}>
              <Row justify="space-between">
                <Circle className="warning" title="Hiz" value={5} />
                <Circle className="success" title="Lezzet" value={8} />
                <Circle className="success" title="Sunum" value={10} />
              </Row>
            </Col>
            <Col span={14} offset={2}>
              <div className="card-view">
                <Row justify="space-between" align="middle">
                  <Col className="justify-center">
                    <Row justify="space-around" align="middle">
                      <FontAwesomeIcon icon={faWallet} />
                      <span>25 TL</span>
                      <FontAwesomeIcon icon={faAngleDown} />
                    </Row>
                    <p className="note">Min.Paket tutari</p>
                  </Col>
                  <Divider type="vertical" style={{ height: 35, width: 3 }} />
                  <Col className="justify-center">
                    <Row justify="space-around" align="middle">
                      <FontAwesomeIcon icon={faLifeRing} />
                      <span>25 TL</span>
                      <FontAwesomeIcon icon={faAngleDown} />
                    </Row>
                    <p className="note">Ort.Servis sursei</p>
                  </Col>
                  <Divider type="vertical" style={{ height: 35, width: 3 }} />
                  <Col span={6} className="justify-space-between" align='middle'>
                    <Row justify="space-around" align="middle">
                      <ClockCircleOutlined />
                      <span>09:00 - 22:00</span>
                      <FontAwesomeIcon icon={faAngleDown} />
                    </Row>
                    <p className="note">Min.Paket tutari</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  };

  filterView = () => {
    return (
      <div className="bg-gray no-radius">
        <Row>
          <Col span={10} >
            <Menu selectedKeys={[this.state.current]} mode="horizontal">
              <Menu.Item key="mail">
                Set Menuler
        </Menu.Item>
              <Menu.Item key="app">
                Baslangiclar
        </Menu.Item>
              <SubMenu icon={<SettingOutlined />} title="Navigation Three - Submenu">
                <Menu.ItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <Menu.Item key="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                  Navigation Four - Link
          </a>
              </Menu.Item>
            </Menu>
            {/* <Row justify="space-around">
              <Button type="link">Set Menuler</Button>
              <Button type="link">Baslangiclar</Button>
              <Button type="link">Atistimalikar</Button>
              <Button type="link">Et Donerler</Button>
              <Button type="link">Et Donerler</Button>
            </Row> */}
          </Col>
          <Col span={6} offset={8} >
            <Row justify="end">
              <h3>Search</h3>

            </Row>
          </Col>
        </Row>
      </div>
    )
  }

  renderTabs = () => {
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="Siparis ver" key="1">
          {this.filterView()}
        </TabPane>
        <TabPane tab="Bilgiler" key="2">
          Content of Tab Pane 2
      </TabPane>
        <TabPane tab="Yemek onerileri" key="3">
          Content of Tab Pane 3
      </TabPane>
        <TabPane tab="Yorumlar (25)" key="4">
          Content of Tab Pane 4
      </TabPane>
      </Tabs>
    )
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <CommonHeader />
          {this.renderHeader()}
          {this.renderFavourite()}
          {this.renderTabs()}
        </div>
      </Fragment>
    );
  }
}

export default Orders;
