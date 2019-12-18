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
    amount: 240
  },
  {
    name: "08.00",
    amount: 221
  },
  {
    name: "10.00",
    amount: 229
  },
  {
    name: "12.00",
    amount: 200
  },
  {
    name: "14.00",
    amount: 218
  },
  {
    name: "16.00",
    amount: 250
  },
  {
    name: "18.00",
    amount: 210
  }
];

const data2 = [
  { name: "Mon", amount: 400 },
  { name: "Tue", amount: 300 },
  { name: "Wed", amount: 200 },
  { name: "Thu", amount: 190},
  { name: "Fri", amount: 189 },
  { name: "Sat", amount: 239 },
  { name: "Sun", amount: 340 }
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
