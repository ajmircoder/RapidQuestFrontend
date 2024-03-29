import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faXmark, faDove, faMagnifyingGlass, faArrowRightFromBracket, faBell } from '@fortawesome/free-solid-svg-icons';
import { faUser, faKeyboard, faRectangleList } from '@fortawesome/free-regular-svg-icons'
import { useState } from "react";

function App() {
  const [rangeOne, setRangeOne] = useState(12);
  const [rangeTwo, setRangeTwo] = useState(50);
  return <>
    <main className="bg-[#e8e8e9] w-full p-3 lg:min-h-screen lg:grid md:grid-cols-[30%_40%_30%] lg:grid-cols-[35%_40%_25%]">
      <section className="bg-white rounded-xl lg:rounded-none mb-6 p-3 lg:mb-0 lg:grid grid-cols-[10%_1fr]">
        <div className="hidden lg:grid grid-rows-[10%_80%_10%]">
          <div>
            <button className=" px-1.5 py-1 block rounded-md hover:bg-[#4935ff] focus:bg-[#4935ff]"><FontAwesomeIcon icon={faDove} /></button>
            <button className=" px-1.5 py-1 block rounded-md hover:bg-[#4935ff] focus:bg-[#4935ff] lg:my-1"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          </div>
          <div>
            <button className=" px-1.5 py-1 block rounded-md hover:bg-[#4935ff] focus:bg-[#4935ff] lg:my-1"><FontAwesomeIcon icon={faHouse} /></button>
            <button className=" px-1.5 py-1 block rounded-md hover:bg-[#4935ff] focus:bg-[#4935ff] lg:my-1"><FontAwesomeIcon icon={faKeyboard} /></button>
            <button className=" px-1.5 py-1 block rounded-md hover:bg-[#4935ff] focus:bg-[#4935ff] lg:my-1"><FontAwesomeIcon icon={faRectangleList} /></button>
            <button className=" px-1.5 py-1 block rounded-md hover:bg-[#4935ff] focus:bg-[#4935ff] lg:my-1"><FontAwesomeIcon icon={faUser} /></button>
          </div>
          <div>
            <button className=" px-1.5 py-1 block rounded-md hover:bg-[#4935ff] focus:bg-[#4935ff] lg:my-1"><FontAwesomeIcon icon={faBell} /></button>
            <button className=" px-1.5 py-1 block rounded-md hover:bg-[#4935ff] focus:bg-[#4935ff]"><FontAwesomeIcon icon={faArrowRightFromBracket} /></button>
          </div>
        </div>
        <div className="lg:bg-[#fafafa] lg:px-5 lg:py-2 lg:rounded-xl">
          <nav className="text-end lg:hidden">
            <button className=" bg-[#fafafa] px-1.5 py-1 rounded-md hover:bg-[#4935ff] focus:bg-[#4935ff]"><FontAwesomeIcon icon={faBell} /></button>
          </nav>
          <header>
            {/* image sec st */}
            <div className="flex lg:p-1">
              <img className=" w-12 h-12 rounded-full mr-2 object-cover lg:w-20 lg:h-20"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPKFZTRvcFk7Hq1yChAkSdl1I60KrRaE3W_A&usqp=CAU" alt="" />
              <div className="">
                <p className=" text-lg lg:text-2xl lg:font-bold">Hi Mike,</p>
                <p className=" text-sm lg:text-xl lg:font-semibold">welcome back.</p>
              </div>
            </div>
            {/* image sec end */}
            {/* price sec st */}
            <div className=" bg-[#fafafa] rounded-xl p-2 my-4">
              <div className=" mb-2">
                <p className=" text-sm font-bold lg:text-xl">Today</p>
                <p className="text-2xl font-bold lg:text-2xl">$19,892</p>
                <p className=" text-sm font-thin lg:font-semibold">Account Balance</p>
              </div>
              <div className="flex">
                <div className=" mr-8">
                  <p className=" font-bold">$4,000</p>
                  <p className=" text-sm font-thin lg:font-semibold">Year-to-Date</p>
                </div>
                <div>
                  <p className=" font-bold">$1,892</p>
                  <p className=" text-sm font-thin lg:font-semibold">Total Interest</p>
                </div>
              </div>
              <button
                className="bg-[#4935ff] mx-auto my-5 block w-6/12 h-8 rounded-lg text-white active:opacity-80 lg:my-5 lg:mx-0">
                I want to....</button>
            </div>
            {/* price sec end */}
            <div className=" bg-[#fafafa] rounded-xl p-2 mt-6">
              <div className=" mb-2">
                <p className=" text-sm lg:font-semibold">Recent Transactions</p>
              </div>
              <div className=" mr-8">
                <p className="text-sm font-thin lg:font-semibold">2024-01-08</p>
                <p className="font-bold text-sm lg:font-semibold">Withdrawl Transfer to Bank-XX11</p>
              </div>
            </div>
          </header>
        </div>
        <footer className="flex justify-between px-2 mt-5 lg:hidden">
          <button className=" bg-[#fafafa] px-1.5 py-1 rounded-md hover:bg-[#4935ff] focus:bg-[#4935ff]"><FontAwesomeIcon icon={faHouse} /></button>
          <button className=" bg-[#fafafa] px-1.5 py-1 rounded-md hover:bg-[#4935ff] focus:bg-[#4935ff]"><FontAwesomeIcon icon={faKeyboard} /></button>
          <button className=" bg-[#fafafa] px-1.5 py-1 rounded-md hover:bg-[#4935ff] focus:bg-[#4935ff]"><FontAwesomeIcon icon={faRectangleList} /></button>
          <button className=" bg-[#fafafa] px-1.5 py-1 rounded-md hover:bg-[#4935ff] focus:bg-[#4935ff]"><FontAwesomeIcon icon={faUser} /></button>
        </footer>
      </section>
      <section className="bg-white rounded-xl lg:rounded-none mb-6 lg:mb-0 p-3 lg:px-5 lg:py-6">
        <nav className=" text-end lg:hidden">
          <button className=" bg-[#fafafa] px-1.5 py-1 rounded-md hover:bg-[#4935ff] focus:bg-[#4935ff]"><FontAwesomeIcon icon={faBell} /></button>
        </nav>
        <header>
          <div className="mb-5">
            <p className=" text-[#7e70ff] lg:text-xl"> Retirement Income</p>
            <p className=" text-xl font-semibold lg:text-2xl">Starting Year 2056 </p>
          </div>
          <div className="lg:grid grid-cols-[33%_69%] gap-2">
            <div >
              <p className="text-xl font-bold">$300,000</p>
              <p className="text-sm font-thin lg:font-semibold">My Goal</p>
              <hr className=" bg-[#7e70ff] my-4"></hr>
            </div>
            <div className="flex justify-between mb-6 lg:flex lg:justify-normal">
              <div className=" w-[50%] mr-2">
                <p className=" font-semibold text-lg">59%</p>
                <p className=" text-sm font-thin lg:font-semibold">Goal Achieved</p>
                <hr className=" bg-[#7e70ff] my-4" />
              </div>
              <div className=" w-[50%]">
                <p className=" font-semibold text-lg">K 300</p>
                <p className=" text-sm font-thin lg:font-semibold">Est. Montly Income</p>
                <hr className=" bg-[#7e70ff] my-4" />
              </div>
            </div>
          </div>

          <div>
            <p className=" font-semibold mb-3">Contributions Overtime</p>
            <div className="flex justify-between">
              <div>
                <span className=" w-3 h-2 bg-[#513ef6] rounded-lg block"></span>
                <p className="text-sm font-thin lg:font-semibold">Employer</p>
                <p className="font-bold">$73,500</p>
              </div>
              <div>
                <span className=" w-3 h-2 bg-[#6f63e1] rounded-lg block"></span>
                <p className="text-sm font-thin lg:font-semibold">Employer</p>
                <p className="font-bold">$52,500</p>
              </div>
              <div>
                <span className=" w-3 h-2 bg-[#a8a3d6] rounded-lg block"></span>
                <p className="text-sm font-thin lg:font-semibold">Total Interest</p>
                <p className="font-bold">$244,313</p>
              </div>
            </div>
            {/* graph */}
            <div className="grid  grid-cols-[12%_88%] my-4">
              <div className="grid py-1 font-thin lg:font-semibold">
                <p>$300</p>
                <p>$200</p>
                <p>$100</p>
                <p>$50</p>
                <p className="pb-2">$0</p>
              </div>
              <div className="simple-bar-chart overflow-hidden">
                <div className="item" style={{ "--clr": "#5EB344", "--val": "10" }}> </div>
                <div className="item " style={{ "--clr": "#FCB72A", "--val": "20" }}></div>
                <div className="item " style={{ "--clr": "#F8821A", "--val": "30" }}></div>
                <div className="item " style={{ "--clr": "#E0393E", "--val": "40" }}> </div>
                <div className="item " style={{ "--clr": "#963D97", "--val": "50" }}></div>
                <div className="item " style={{ "--clr": "#069CDB", "--val": "60" }}></div>
                <div className={`item`} style={{ "--clr": "#069CDB", "--val": "70", }}></div>
                <div className={`item`} style={{ "--clr": "#069CDB", "--val": "80", }}></div>
                <div className={`item`} style={{ "--clr": "#069CDB", "--val": "90", }}></div>
                <div className={`item`} style={{ "--clr": "#069CDB", "--val": "100", }}></div>
                <div className={`item`} style={{ "--clr": "#069CDB", "--val": "110", }}></div>
                <div className={`item`} style={{ "--clr": "#069CDB", "--val": "120", }}></div>
                <div className={`item`} style={{ "--clr": "#069CDB", "--val": "130", }}></div>
              </div>
            </div>
            {/* graph */}
          </div>
          <footer className="flex justify-between px-2 mt-5 lg:hidden">
            <button className=" bg-[#fafafa] px-1.5 py-1 rounded-md hover:bg-[#4935ff] focus:bg-[#4935ff]"><FontAwesomeIcon icon={faHouse} /></button>
            <button className=" bg-[#fafafa] px-1.5 py-1 rounded-md hover:bg-[#4935ff] focus:bg-[#4935ff]"><FontAwesomeIcon icon={faKeyboard} /></button>
            <button className=" bg-[#fafafa] px-1.5 py-1 rounded-md hover:bg-[#4935ff] focus:bg-[#4935ff]"><FontAwesomeIcon icon={faRectangleList} /></button>
            <button className=" bg-[#fafafa] px-1.5 py-1 rounded-md hover:bg-[#4935ff] focus:bg-[#4935ff]"><FontAwesomeIcon icon={faUser} /></button>
          </footer>
        </header>
      </section>
      <section className="bg-white rounded-t-xl lg:rounded-none lg:px-4 lg:py-2">
        <div className=" lg:bg-[#fafafa] lg:h-full lg:rounded-xl">
          <nav className="p-3 text-end lg:hidden">
            <button className=" bg-[#fafafa] px-1.5 py-1 rounded-md hover:bg-[#4935ff] focus:bg-[#4935ff]"><FontAwesomeIcon icon={faXmark} /></button>
          </nav>
          <header className="p-3">
            <div>
              <p className="font-bold lg:text-2xl">How do I compare to my peers?</p>
              <p className="font-thin text-sm lg:text:xl lg:font-semibold">These numbers represent current goal achievement.</p>
            </div>
            <div className="flex">
              <label htmlFor="age" className=" mr-14 lg:font-semibold">Age: </label>
              <div className=" flex">
                <p className="mr-1 lg:font-semibold">Under</p>
                <select className="font-semibold" name="" id="age">
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                </select>
              </div>
            </div>
            <hr className="my-3" />
            <div className="flex">
              <label htmlFor="Salary" className="mr-10 lg:font-semibold">Salary: </label>
              <div className=" flex">
                <p className="mr-1 lg:font-semibold">K20 - </p>
                <select className="font-semibold" name="" id="Salary">
                  <option value="20">K20</option>
                  <option value="21">K21</option>
                  <option value="22">K22</option>
                  <option value="23">K23</option>
                  <option value="24">K24</option>
                  <option value="25">K25</option>
                  <option value="26">K26</option>
                  <option value="27">K27</option>
                  <option value="28">K28</option>
                  <option value="29">K29</option>
                  <option value="30">K30</option>
                </select>
              </div>
            </div>
            <hr className="my-3" />
            <div className="flex">
              <label htmlFor="gender" className="mr-7 lg:font-semibold">Gender: </label>
              <select className=" font-semibold" name="" id="gender">
                <option value="Male">Male</option>
                <option value="Femal">Female</option>
              </select>
            </div>
            <hr className="my-3" />
            <div className="my-4 flex justify-between px-8">
              <div>
                <div className="graph-container h-14 w-14">
                  <div className={`graph-fill w-[100%] h-[78%]`}></div>
                  <div className="graph-label">78%</div>
                </div>
                <p className="text-center">Avarage</p>
              </div>
              <div>
                <div className="graph-container h-14 w-14">
                  <div className={`graph-fill w-[100%] h-[85%]`}></div>
                  <div className="graph-label">85%</div>
                </div>
                <p className="text-center">Top</p>
              </div>
              <div>
                <div className="graph-container h-14 w-14">
                  <div className={`graph-fill w-[100%] h-[59%]`}></div>
                  <div className="graph-label">59%</div>
                </div>
                <p className="text-center">Me</p>
              </div>
            </div>
          </header>
          <footer>
            <div className=" bg-[#fafafa] rounded-t-3xl lg:rounded-none p-3">
              <div>
                <p className="my-2 text-lg font-bold">Retirement Strategy</p>
                <div className="">
                  <p className="font-semibold">Employee Contribution</p>
                  <div className="flex">
                    <input value={rangeOne} type="range" onChange={(e) => setRangeOne(e.target.value)} className=" mr-5 w-full" />
                    <p>{rangeOne}%</p>
                  </div>
                </div>
              </div>
              <div className="">
                <p className="font-semibold">Retirement Age</p>
                <div className="flex">
                  <input value={rangeTwo} onChange={(e) => setRangeTwo(e.target.value)} type="range" max="70" className=" mr-5 w-full" />
                  <p>{rangeTwo}</p>
                </div>
              </div>
              <div className="flex justify-between my-2 font-semibold">
                <p>Employer Contribution</p>
                <p>8.4%</p>
              </div>
              <div className="flex justify-between my-2 font-semibold">
                <p>Interest Rate</p>
                <p>5%</p>
              </div>
            </div>
            <div className="bg-[#e8e8e9] lg:rounded-b-3xl active:opacity-65">
              <button className="w-full py-4 rounded-b-3xl bg-[#4935ff] text-white lg:font-semibold">
                Update
              </button>
            </div>
          </footer>
        </div>
      </section>
    </main>

  </>
}

export default App
