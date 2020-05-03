import React, { Component, Fragment } from "react";
import { Breadcrumb, Row, Col, Button, Divider } from "antd";
import {
  HomeOutlined,
  HeartFilled,
  FacebookFilled,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import CommonHeader from "../../layout/header";
import Circle from "../../circle";
import labels from "../../../config/static/lables";
import dish from "../../../assets/images/dish.png";

const label = labels.en;

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

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
                  <Col>
                    <Row justify="space-around" align="middle">
                      <FontAwesomeIcon icon={faWallet} />
                      <span>25 TL</span>
                      <FontAwesomeIcon icon={faAngleDown} />
                    </Row>
                    <p className="note">Min.Paket tutari</p>
                  </Col>
                  <Divider type="vertical" style={{ height: 35, width: 3 }} />
                  <Col>
                    <h3>sdsd</h3>
                  </Col>
                  <Divider type="vertical" style={{ height: 35, width: 3 }} />
                  <Col span={8}>
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

  render() {
    return (
      <Fragment>
        <div className="container">
          <CommonHeader />
          {this.renderHeader()}
          {this.renderFavourite()}
        </div>
      </Fragment>
    );
  }
}

export default Orders;
