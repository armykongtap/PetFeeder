import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Legend
} from "recharts";

const data = [
  {
    name: "06.00",
    amount: 0
  },
  {
    name: "08.00",
    amount: 221
  },
  {
    name: "10.00",
    amount: 20
  },
  {
    name: "12.00",
    amount: 200
  },
  {
    name: "14.00",
    amount: 0
  },
  {
    name: "16.00",
    amount: 0
  },
  {
    name: "18.00",
    amount: 250
  },
  {
    name: "20.00",
    amount: 0
  },
  {
    name: "22.00",
    amount: 100
  }
];

const data2 = [
  { name: "Mon", amount: 600 },
  { name: "Tue", amount: 700 },
  { name: "Wed", amount: 810 },
  { name: "Thu", amount: 790 },
  { name: "Fri", amount: 689 },
  { name: "Sat", amount: 739 },
  { name: "Sun", amount: 640 }
];

class EatTime extends Component {
  render() {
    return (
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    );
  }
}

class EatDay extends Component {
  render() {
    return (
      <LineChart
        width={500}
        height={300}
        data={data2}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 28
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          connectNulls
          type="monotone"
          dataKey="amount"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </LineChart>
    );
  }
}

class Graph extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <EatTime />
          </Col>
          <Col>
            <EatDay />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Graph;
