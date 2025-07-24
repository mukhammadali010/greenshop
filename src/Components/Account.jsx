"use client"

import { useState } from "react"
import { Layout, Menu, Form, Input, Button, Upload, Select, Avatar, Space, Typography, Divider } from "antd"
import {
  UserOutlined,
  HomeOutlined,
  ShoppingOutlined,
  HeartOutlined,
  BarChartOutlined,
  DownloadOutlined,
  CustomerServiceOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  CameraOutlined,
} from "@ant-design/icons"

const { Sider, Content } = Layout
const { Title, Text } = Typography
const { Option } = Select

export default function Component() {
  const [selectedKey, setSelectedKey] = useState("1")
  const [form] = Form.useForm()

  const menuItems = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Account Details",
    },
    {
      key: "2",
      icon: <HomeOutlined />,
      label: "Address",
    },
    {
      key: "3",
      icon: <ShoppingOutlined />,
      label: "Orders",
    },
    {
      key: "4",
      icon: <HeartOutlined />,
      label: "Wishlist",
    },
    {
      key: "5",
      icon: <BarChartOutlined />,
      label: "Reports",
    },
    {
      key: "6",
      icon: <DownloadOutlined />,
      label: "Downloads",
    },
    {
      key: "7",
      icon: <CustomerServiceOutlined />,
      label: "Support",
    },
  ]

  const onFinish = () => {
    console.log("Form values:", values)
  }

  const handleUpload = () => {
    console.log("Upload info:", info)
  }

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#f5f5f5"  }}>
      <div className="container mx-auto flex mt-6">
      <Sider
        width={250}
        style={{
          backgroundColor: "white",
          borderRight: "1px solid #f0f0f0",
          
        }}
      >
        <div style={{ padding: "24px 16px" }}>
          <Title level={4} style={{ margin: 0, color: "#333" }}>
            My Account
          </Title>
        </div>
        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={({ key }) => setSelectedKey(key)}
          style={{ border: "none" }}
          items={menuItems}
        />
      </Sider>

      <Layout>
        <Content style={{ padding: "32px", backgroundColor: "white", margin: "0" }}>
          <Title level={3} style={{ marginBottom: "24px", color: "#333" }}>
            Personal Information
          </Title>

          <Form form={form} layout="vertical" onFinish={onFinish} style={{ maxWidth: "800px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[{ required: true, message: "Please input your first name!" }]}
              >
                <Input placeholder="Enter first name" />
              </Form.Item>

              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[{ required: true, message: "Please input your last name!" }]}
              >
                <Input placeholder="Enter last name" />
              </Form.Item>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
              <Form.Item
                label="Email address"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input placeholder="Enter email address" />
              </Form.Item>

              <Form.Item
                label="Phone Number"
                name="phone"
                rules={[{ required: true, message: "Please input your phone number!" }]}
              >
                <Input
                  addonBefore={
                    <Select defaultValue="+966" style={{ width: 80 }}>
                      <Option value="+966">+966</Option>
                      <Option value="+1">+998</Option>
                      <Option value="+44">+44</Option>
                      <Option value="+91">+91</Option>
                    </Select>
                  }
                  placeholder="Enter phone number"
                />
              </Form.Item>
            </div>

            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: "Please input your username!" }]}
              style={{ marginBottom: "24px" }}
            >
              <Input placeholder="Enter username" style={{ width: "48%" }} />
            </Form.Item>

            <Form.Item label="Photo" style={{ marginBottom: "32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <Avatar size={64} icon={<UserOutlined />} style={{ backgroundColor: "#f0f0f0", color: "#999" }} />
                <Space>
                  <Upload showUploadList={false} beforeUpload={() => false} onChange={handleUpload}>
                    <Button
                      type="primary"
                      style={{ backgroundColor: "#52c41a", borderColor: "#52c41a" }}
                      icon={<CameraOutlined />}
                    >
                      Change
                    </Button>
                  </Upload>
                  <Button type="text" style={{ color: "#999" }}>
                    Remove
                  </Button>
                </Space>
              </div>
            </Form.Item>

            <Divider />

            <Title level={4} style={{ marginBottom: "24px", color: "#333" }}>
              Password change
            </Title>

            <Form.Item label="Current password" name="currentPassword" style={{ marginBottom: "16px" }}>
              <Input.Password
                placeholder="Enter current password"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                style={{ width: "48%" }}
              />
            </Form.Item>

            <Form.Item label="New password" name="newPassword" style={{ marginBottom: "16px" }}>
              <Input.Password
                placeholder="Enter new password"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                style={{ width: "48%" }}
              />
            </Form.Item>

            <Form.Item
              label="Confirm new password"
              name="confirmPassword"
              dependencies={["newPassword"]}
              rules={[
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(new Error("The two passwords do not match!"))
                  },
                }),
              ]}
              style={{ marginBottom: "32px" }}
            >
              <Input.Password
                placeholder="Confirm new password"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                style={{ width: "48%" }}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: "#52c41a",
                  borderColor: "#52c41a",
                  padding: "8px 24px",
                  height: "auto",
                }}
              >
                Save Change
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
      </div>
    </Layout>
  )
}
