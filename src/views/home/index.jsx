import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { Tabs, Select } from "antd";
const { TabPane } = Tabs;
const { Option } = Select;

let themeStr = process.env["REACT_APP_theme"];
let theme = [];
if (themeStr) {
  theme = themeStr.split(";");
}

const callback = val => {
  console.log(val);
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = value => {
    let bodyEl = document.querySelector("body");
    bodyEl.setAttribute("data-theme", value);
  };

  render() {
    return (
      <div className={styles.home}>
        <Select
          defaultValue={theme[0]}
          style={{ width: 120 }}
          onChange={this.handleChange}
        >
          {theme.map(item => {
            return (
              <Option key={item} value={item}>
                {item}
              </Option>
            );
          })}
        </Select>
        <h1>sdasdas</h1>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Home;
