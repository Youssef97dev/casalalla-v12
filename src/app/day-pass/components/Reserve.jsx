"use client";
import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const numbers = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const selectTime = [
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
];

const Reserve = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [datePass, setDatePAss] = useState(new Date());
  const [numberPerson, setNumberPerson] = useState(2);
  const [selectedTime, setSelectedTime] = useState("Aucune heure sélectionnée");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    commentaire: "",
  });
  const [selectedLunch, setSelectedLunch] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangeTabNext = () => {
    if (activeTab === 1) {
      setActiveTab(2);
    }
    if (activeTab === 2) {
      setActiveTab(3);
    }
    if (activeTab === 3) {
      setActiveTab(4);
    }
    if (activeTab === 4) {
      setActiveTab(5);
    }
  };

  const handleChangeTabBack = () => {
    if (activeTab === 4) {
      setActiveTab(3);
    }
    if (activeTab === 3) {
      setActiveTab(2);
    }
    if (activeTab === 2) {
      setActiveTab(1);
    }
  };

  return (
    <div className="w-full lg:w-[80%] flex flex-col justify-center items-center bg-white p-2 mx-5">
      <div className="w-full">
        <div className="w-full">
          {activeTab === 1 && (
            <div className="w-full flex flex-col justify-center items-center gap-3">
              <div className="w-full flex flex-row justify-center items-center text-secondary gap-2">
                <div className="w-fit flex flex-row justify-center items-center gap-1">
                  <FaCalendarAlt size={18} />
                  <span>{`${datePass.getDate()}/${
                    datePass.getMonth() + 1
                  }/${datePass.getFullYear()}`}</span>
                  <span className="ml-2">|</span>
                </div>
                <div className="w-fit flex flex-row justify-center items-center gap-1">
                  <IoPerson size={18} />
                  <span>{numberPerson}</span>
                  <span className="ml-2">|</span>
                </div>
                <div className="w-fit flex flex-row justify-center items-center gap-1">
                  <MdOutlineWatchLater size={18} />
                  <span>{selectedTime}</span>
                </div>
              </div>
              <div className="w-full flex flex-col justify-center items-start gap-1 px-3">
                <strong className="text-secondary ">Nombre de personnes</strong>
                <div className="w-full flex justify-center items-center">
                  <select
                    onChange={(e) => setNumberPerson(e.target.value)}
                    className="w-full text-primary_11 px-3 py-[9px] rounded-l-md rounded-r-none bg-[#efe2bd] outline-none"
                  >
                    <option value="2"></option>
                    {numbers.map((value) => (
                      <option key={value} value={`${value}`}>
                        {value}
                      </option>
                    ))}
                  </select>
                  <div className="bg-[#efe2bd] text-primary_11 flex justify-center items-center rounded-r-md py-2 px-3 border border-l-0 border-white-light">
                    <IoPerson size={23} />
                  </div>
                </div>
              </div>
              <Calendar
                onChange={setDatePAss}
                value={datePass}
                className="!w-full  !px-3 !border-none"
              />
              <div className="w-full flex flex-col justify-center items-start gap-1 px-3">
                <strong className="text-secondary ">Heure</strong>
                <div className="w-full flex justify-center items-center">
                  <select
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full text-primary_11 px-3 py-3 rounded-l-md rounded-r-none bg-[#efe2bd] outline-none"
                  >
                    <option value="11:00">{`Reservation for Day pass and 3 course lunch`}</option>
                    {selectTime.map((value) => (
                      <option key={value} value={`${value}`}>
                        {value}
                      </option>
                    ))}
                  </select>
                  <div className="bg-[#efe2bd] text-primary_11 flex justify-center items-center rounded-r-md py-[9px] px-3 border border-l-0 border-white-light">
                    <MdOutlineWatchLater size={27} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-full">
          {activeTab === 2 && (
            <div className="w-full flex flex-col justify-center items-center gap-6 px-2">
              <div className="w-full flex flex-row justify-center items-center text-secondary gap-2">
                <div className="w-fit flex flex-row justify-center items-center gap-1">
                  <FaCalendarAlt size={18} />
                  <span>{`${datePass.getDate()}/${
                    datePass.getMonth() + 1
                  }/${datePass.getFullYear()}`}</span>
                  <span className="ml-2">|</span>
                </div>
                <div className="w-fit flex flex-row justify-center items-center gap-1">
                  <IoPerson size={18} />
                  <span>{numberPerson}</span>
                  <span className="ml-2">|</span>
                </div>
                <div className="w-fit flex flex-row justify-center items-center gap-1">
                  <MdOutlineWatchLater size={18} />
                  <span>{selectedTime}</span>
                </div>
              </div>
              <h1 className="text-[22px] leading-[26.4px]  text-secondary font-light ">{`Une option est requise pour cette réservation.`}</h1>
              <div
                className={`relative w-full m-2 rounded border border-primary p-3 flex flex-col gap-3 justify-center items-center text-black hover:bg-secondary hover:text-white ${
                  selectedLunch && "bg-secondary text-white"
                }`}
                onClick={() => setSelectedLunch(!selectedLunch)}
              >
                <h1 className="text-[24px] leading-[26.4px] mr-auto font-light">{`Reservation for 3 course lunch and day pass (.د.م600.00)`}</h1>
                <p className="text-[16px] leading-[24px] mr-auto">
                  {`You are welcome to join us for a day pass with pool access included. We serve lunch between 1-4pm.`}
                </p>
                <div className="absolute top-1 right-1 border border-primary text-secondary bg-white px-3 py-1 text-sm">
                  {selectedLunch ? "Selected" : "Select"}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-full">
          {activeTab === 3 && (
            <div className="w-full flex flex-col gap-6 justify-center items-center">
              <div className="w-full flex flex-row justify-center items-center text-secondary gap-2">
                <div className="w-fit flex flex-row justify-center items-center gap-1">
                  <FaCalendarAlt size={18} />
                  <span>{`${datePass.getDate()}/${
                    datePass.getMonth() + 1
                  }/${datePass.getFullYear()}`}</span>
                  <span className="ml-2">|</span>
                </div>
                <div className="w-fit flex flex-row justify-center items-center gap-1">
                  <IoPerson size={18} />
                  <span>{numberPerson}</span>
                  <span className="ml-2">|</span>
                </div>
                <div className="w-fit flex flex-row justify-center items-center gap-1">
                  <MdOutlineWatchLater size={18} />
                  <span>{selectedTime}</span>
                </div>
              </div>
              <h1 className="text-[24px] leading-[26.4px] mr-auto text-secondary font-light">{`Détails Clients`}</h1>
              <div className="w-full flex justify-center items-center gap-3">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Prénom"
                  required
                  className="w-full border border-primary rounded  p-2 focus:outline-none text-secondary"
                />
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Nom"
                  required
                  className="w-full border border-primary rounded  p-2 focus:outline-none text-secondary"
                />
              </div>
              <div className="w-full flex justify-center items-center gap-3">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full border border-primary rounded  p-2 focus:outline-none text-secondary"
                />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="phone"
                  required
                  className="w-full border border-primary rounded  p-2 focus:outline-none text-secondary"
                />
              </div>
              <span className="text-[16px] text-secondary mr-auto  ">
                Commentaire
              </span>
              <textarea
                id="commentaire"
                name="commentaire"
                value={formData.commentaire}
                rows={4}
                onChange={handleChange}
                className="w-full border border-primary rounded focus:outline-none text-secondary p-3"
              />
            </div>
          )}
        </div>
        <div className="w-full">
          {activeTab === 4 && (
            <div className="w-full flex flex-col justify-center items-center gap-6">
              <div className="w-full flex flex-row justify-center items-center text-secondary gap-2">
                <div className="w-fit flex flex-row justify-center items-center gap-1">
                  <FaCalendarAlt size={18} />
                  <span>{`${datePass.getDate()}/${
                    datePass.getMonth() + 1
                  }/${datePass.getFullYear()}`}</span>
                  <span className="ml-2">|</span>
                </div>
                <div className="w-fit flex flex-row justify-center items-center gap-1">
                  <IoPerson size={18} />
                  <span>{numberPerson}</span>
                  <span className="ml-2">|</span>
                </div>
                <div className="w-fit flex flex-row justify-center items-center gap-1">
                  <MdOutlineWatchLater size={18} />
                  <span>{selectedTime}</span>
                </div>
              </div>
              <h1 className="text-[22px] leading-[26.4px] mr-auto font-light text-secondary">{`Merci de vérifier vos informations`}</h1>
              <div className="w-full flex flex-col justify-center items-center gap-1">
                <div className="w-full flex justify-between items-center gap-10 border-t border-casa_1 text-secondary text-[18px] leading-[20px] p-2">
                  <span>Date :</span>
                  <span className="font-light">{`${datePass.getDate()}/${
                    datePass.getMonth() + 1
                  }/${datePass.getFullYear()}`}</span>
                </div>
                <div className="w-full flex justify-between items-center gap-10 border-t border-casa_1 text-secondary text-[18px] leading-[20px] p-2">
                  <span>Heure :</span>
                  <span className="font-light">{`${selectedTime}`}</span>
                </div>
                <div className="w-full flex justify-between items-center gap-10 border-t border-casa_1 text-secondary text-[18px] leading-[20px] p-2">
                  <span>Personnes :</span>
                  <span className="font-light">{`${numberPerson}`}</span>
                </div>
                <div className="w-full flex justify-between items-center gap-10 border-t border-casa_1 text-secondary text-[18px] leading-[20px] p-2">
                  <span>Prénom :</span>
                  <span className="font-light">{`${formData.firstName}`}</span>
                </div>
                <div className="w-full flex justify-between items-center gap-10 border-t border-casa_1 text-secondary text-[18px] leading-[20px] p-2">
                  <span>Nom :</span>
                  <span className="font-light">{`${formData.lastName}`}</span>
                </div>
                <div className="w-full flex justify-between items-center gap-10 border-t border-casa_1 text-secondary text-[18px] leading-[20px] p-2">
                  <span>Téléphone :</span>
                  <span className="font-light">{`${formData.phone}`}</span>
                </div>
                <div className="w-full flex justify-between items-center gap-10 border-t border-casa_1 text-secondary text-[18px] leading-[20px] p-2">
                  <span>Email :</span>
                  <span className="font-light">{`${formData.email}`}</span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-full mb-5">
          {activeTab === 5 && (
            <div className="text-[20px] leading-[26.4px] mr-auto text-secondary">
              {"Votre résérvation a été envoyé"}
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <button
          type="button"
          className={`px-3 py-1 bg-secondary text-white rounded ${
            activeTab === 1 || activeTab === 5 ? "hidden" : ""
          }`}
          onClick={() => handleChangeTabBack()}
        >
          Précédent
        </button>
        <button
          type="button"
          className={`px-3 py-1 bg-secondary text-white rounded ml-auto disabled:bg-gray-400 ${
            activeTab === 5 ? "hidden" : ""
          }`}
          onClick={() => handleChangeTabNext()}
          disabled={
            (activeTab === 1 &&
              (selectedTime === "Aucune heure sélectionnée" ||
                numberPerson < 3)) ||
            (activeTab === 2 && !selectedLunch) ||
            (activeTab === 3 &&
              (formData.firstName === "" ||
                formData.lastName === "" ||
                formData.email === "" ||
                formData.phone === ""))
          }
        >
          {activeTab === 4 ? "Résérver" : "Suivant"}
        </button>
      </div>
    </div>
  );
};

export default Reserve;
