/**
 * cn - 基本用法
 * en - Base
 */
import React, { PureComponent } from 'react'
import { Form, Input, Checkbox, Textarea, Select, DatePicker, Tree } from 'shineout'

const citys = [
  {
    name: 'JiangSu',
    children: [
      { name: 'NanJing' },
      { name: 'SuZhou' },
      { name: 'YangZhou' },
    ],
  },
  {
    name: 'ZheJiang',
    children: [
      { name: 'HangZhou' },
      { name: 'JiaQing' },
      { name: 'WenZhou' },
    ],
  },
]

export default class extends PureComponent {
  initValue = {
    email: 'test@example.com',
    age: 18,
    range: [],
  }

  render() {
    return (
      <Form value={this.initValue} onSubmit={(data) => { console.log(data) }}>
        <Form.Item label="Email">
          <Input name="email" />
        </Form.Item>

        <Form.Item label="Password">
          <Input name="password" type="password" />
        </Form.Item>

        <Form.Item label="Name">
          <Input.Group style={{ width: 300 }}>
            <Input name="firstName" placeholder="First Name" />
            -
            <Input name="lastName" placeholder="Last Name" />
          </Input.Group>
        </Form.Item>

        <Form.Item label="Age">
          <Input style={{ width: 100 }} name="age" type="number" digits={0} defaultValue={0} />
        </Form.Item>

        <Form.Item label="Favorite Color">
          <Checkbox.Group
            name="favoriteColor"
            data={['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']}
          />
        </Form.Item>

        <Form.Item label="Hate Color">
          <Select
            name="hateColor"
            style={{ width: 100 }}
            data={['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']}
          />
        </Form.Item>

        <Form.Item label="Date">
          <DatePicker range name={['startDate', 'endDate']} />
        </Form.Item>

        <Form.Item label="Description">
          <Textarea name="desc" autosize />
        </Form.Item>

        <Form.Item label="From">
          <Form.Field name="from">
            <Tree data={citys} mode={2} keygen="name" renderItem="name" />
          </Form.Field>
        </Form.Item>

        <Form.Item label="">
          <Form.Submit>Submit</Form.Submit>
          <Form.Reset>Reset</Form.Reset>
        </Form.Item>
      </Form>
    )
  }
}
