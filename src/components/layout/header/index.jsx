import React, { Component, Fragment } from "react";
import {
  Button,
  Input,
  Row,
  Col,
  Select,
  Divider,
  Avatar,
} from "antd";
import { GiftOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import logo from "../../../assets/images/logo.png";
import labels from "../../../config/static/lables";

const label = labels.en;
const { Search } = Input;
const { Option } = Select;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  renderLeft = () => {
    return (
      <Col span={12} className="headerLeft">
        <img src={logo} alt="Logo" />
        <Button type="primary" danger>
          {label.orders}
        </Button>
        <Search
          className="search"
          placeholder={label.searchVenue}
          onSearch={(value) => console.log(value)}
          style={{ width: 200 }}
        />
        <Input
          placeholder={label.campaigns}
          prefix={<GiftOutlined className="site-form-item-icon" />}
          style={{ width: 200 }}
        />
      </Col>
    );
  };

  renderRight = () => {
    return (
      <Col span={10}  className="headerRight">
        <Select defaultValue="lucy" style={{ width: 200 }}>
          <Option value="jack">Jack</Option>
          <Option value="lucy"> {label.hi}, Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Divider type="vertical" style={{ height: 30 }} />
        <div className="column">
          {label.cardBalance}
          <h4>172,00 {label.currency}</h4>
        </div>
        <Row justify="space-between" align="middle">
          <Avatar
            size="large"
            style={{ margin: "10px", color: "white", backgroundColor: "#0bbd0b" }}
            icon={<ShoppingCartOutlined />}
          />
          <div className="column">
            {label.totalAmount}
            <h4 style={{color:'#0bbd0b'}}>27,00 {label.currency}</h4>
          </div>
        </Row>
      </Col>
    );
  };

  render() {
    return (
      <Fragment>
        <Row className="header">
          {this.renderLeft()}
          {this.renderRight()}
        </Row>
      </Fragment>
    );
  }
}
export default Header;
