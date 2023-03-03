import React from "react";
import { useState } from 'react'
function Inventory() {
  

  return (
    <div className="">
      <header>
        <h2 className="py-12">Inventory</h2>
        <section className="flex justify-between items-center p-8">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text-alt">Filter</span>
            </label>
            <select className="select select-bordered">
              <option disabled defaultValue>Pick one</option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
            
          </div>
          {/* The button to open modal */}
          <label htmlFor="my-modal-4" className="btn">open modal</label>

          
        </section>
      </header>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr className="hover">
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Inventory

