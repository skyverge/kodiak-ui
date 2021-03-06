import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { Label } from '../../Label'
import { Checkbox } from '../Checkbox'

expect.addSnapshotSerializer(serializer)

describe('Checkbox', () => {
  it('should render the checked checkbox input', () => {
    expect(
      renderer
        .create(
          <Label sx={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox name="dark-mode" defaultChecked={true} />
            Dark Mode
          </Label>,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-4 {
        box-sizing: border-box;
        display: inline-block;
        margin: 0;
        min-width: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .emotion-3 {
        box-sizing: border-box;
        display: inline-block;
        margin: 0;
        min-width: 0;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        font-weight: normal;
        line-height: 1;
      }

      .emotion-3[data-checkbox-disabled=true] {
        opacity: 0.4;
      }

      .emotion-0 {
        border: 0;
        -webkit-clip: rect(0 0 0 0);
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
        white-space: nowrap;
        word-wrap: normal;
      }

      .emotion-2 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        background-color: transparent;
        border: 1px solid;
        border-color: muted;
        height: 16px;
        line-height: 1;
        position: relative;
        width: 16px;
        margin-right: 8px;
      }

      .emotion-2[data-checkbox-checked=true] {
        background-color: primary;
        border-color: primary;
      }

      .emotion-2[data-checkbox-indeterminate=true] {
        background-color: primary;
        border-color: primary;
      }

      .emotion-2[data-checkbox-error=true] {
        background-color: transparent;
        border-color: danger;
      }

      .emotion-1 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        height: 10px;
        width: 100%;
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        left: 0;
        right: 0;
      }

      <label
        className="emotion-4"
      >
        <label
          className="emotion-3"
        >
          <span
            className="emotion-0"
          >
            <input
              checked={true}
              name="dark-mode"
              onChange={[Function]}
              type="checkbox"
            />
          </span>
          <span
            aria-hidden={true}
            className="emotion-2"
            data-checkbox-checked={true}
            data-checkbox-error={false}
          >
            <svg
              className="emotion-1"
              viewBox="0 0 10 10"
            >
              <title />
              <desc />
              <path
                d="M9.9367 2.06204L8.70028 0.81556C8.67972 0.794831 8.65528 0.778385 8.62838 0.767164C8.60148 0.755943 8.57264 0.750167 8.54352 0.750167C8.51439 0.750167 8.48555 0.755943 8.45865 0.767164C8.43175 0.778385 8.40732 0.794831 8.38675 0.81556L3.16474 6.06858C3.14417 6.08931 3.11973 6.10575 3.09283 6.11697C3.06593 6.12819 3.03709 6.13397 3.00797 6.13397C2.97885 6.13397 2.95001 6.12819 2.92311 6.11697C2.89621 6.10575 2.87177 6.08931 2.8512 6.06858L1.61478 4.8221C1.59421 4.80137 1.56978 4.78492 1.54288 4.7737C1.51598 4.76248 1.48714 4.75671 1.45802 4.75671C1.42889 4.75671 1.40005 4.76248 1.37315 4.7737C1.34625 4.78492 1.32182 4.80137 1.30125 4.8221L0.0648293 6.06858C0.0233191 6.11032 0 6.16692 0 6.22594C0 6.28497 0.0233191 6.34157 0.0648293 6.38331L2.8512 9.18477C2.87177 9.2055 2.89621 9.22195 2.92311 9.23317C2.95001 9.24439 2.97885 9.25017 3.00797 9.25017C3.03709 9.25017 3.06593 9.24439 3.09283 9.23317C3.11973 9.22195 3.14417 9.2055 3.16474 9.18477L9.9367 2.37366C9.97728 2.33205 10 2.27611 10 2.21785C10 2.15959 9.97728 2.10365 9.9367 2.06204Z"
                fill="white"
              />
            </svg>
          </span>
        </label>
        Dark Mode
      </label>
    `)
  })

  it('should render the unchecked radio input', () => {
    expect(
      renderer
        .create(
          <Label sx={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox name="dark-mode" />
            Light Mode
          </Label>,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-3 {
        box-sizing: border-box;
        display: inline-block;
        margin: 0;
        min-width: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .emotion-2 {
        box-sizing: border-box;
        display: inline-block;
        margin: 0;
        min-width: 0;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        font-weight: normal;
        line-height: 1;
      }

      .emotion-2[data-checkbox-disabled=true] {
        opacity: 0.4;
      }

      .emotion-0 {
        border: 0;
        -webkit-clip: rect(0 0 0 0);
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
        white-space: nowrap;
        word-wrap: normal;
      }

      .emotion-1 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        background-color: transparent;
        border: 1px solid;
        border-color: muted;
        height: 16px;
        line-height: 1;
        position: relative;
        width: 16px;
        margin-right: 8px;
      }

      .emotion-1[data-checkbox-checked=true] {
        background-color: primary;
        border-color: primary;
      }

      .emotion-1[data-checkbox-indeterminate=true] {
        background-color: primary;
        border-color: primary;
      }

      .emotion-1[data-checkbox-error=true] {
        background-color: transparent;
        border-color: danger;
      }

      <label
        className="emotion-3"
      >
        <label
          className="emotion-2"
        >
          <span
            className="emotion-0"
          >
            <input
              checked={false}
              name="dark-mode"
              onChange={[Function]}
              type="checkbox"
            />
          </span>
          <span
            aria-hidden={true}
            className="emotion-1"
            data-checkbox-checked={false}
            data-checkbox-error={false}
          />
        </label>
        Light Mode
      </label>
    `)
  })
})
