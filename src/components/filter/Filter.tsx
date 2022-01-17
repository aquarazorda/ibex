import React from 'react';
import { Form } from '../form/Form';
import { FormData } from '../../types/form';
import filterData from '../../data/filter.json';

export function Filter() {
  const submit = (data: FormData) => {
    console.log("TODO handle data");
  };

  return (
    <section className="filter">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-6">
                <div className="row">
                  <div className="col-4">
                    <p className="font--xs font--gray-3 mb-5">From To:</p>
                    <div className="date-picker">
                      <p>02/02/2022 - 02/02/2022</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <p className="font--xs font--gray mb-5">Type:</p>
                    <div className="type flex">
                      <div className="form__item">
                        <label>video</label>
                        {/* <input className="checkbox" type="checkbox" id="video" /> */}
                      </div>
                      <div className="form__item">
                        <label>text</label>
                        {/* <input className="checkbox" type="checkbox" id="text" /> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <p className="font--xs font--gray mb-5">Text Input:</p>
                    <div className="type flex">
                      <div className="form__item">
                        {/* <input className="field" type="text" placeholder="Some Text"> </input> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <p className="font--xs font--gray-3 mb-5">Platform:</p>
                <div className="select-tags"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <p className="font--xs font--gray-3 mb-5">Data Source:</p>
                <div className="select-tags"></div>
              </div>
              <div className="col-6">
                <p className="font--xs font--gray-3 mb-5">Person:</p>
                <div className="select-tags"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <p className="font--xs font--gray-3 mb-5">Topic:</p>
                <div className="select-tags"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <button className="btn btn--show-hide"><span>Hide Filter</span><i className="icn icn--double-chevron-up"></i>
        </button> */}
      </div>
    </section>
  );
}