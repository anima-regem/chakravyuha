import React, { useState } from "react";
import "./Footprint.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import ClipLoader from "react-spinners/ClipLoader";

const Footprint = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [electricity, setElectricity] = useState(0);
    const [petrol, setPetrol] = useState(0);
    const [diesel, setDiesel] = useState(0);
    const [lpg, setLpg] = useState(0);
    const [emission, setEmission] = useState("Kilograms of CO2 Produced");
    const [loading, setLoading] = useState(false);

    const login = async (e) => {
        e.preventDefault();
        setLoading(true);

        var footprint = (electricity * 0.85) + (petrol * 2.296) + (diesel * 2.653) + (lpg * 2.983);
        setEmission(footprint);

        setLoading(false);

    };

    return (
        <div className="row login_wrapper">
            <div className="col-lg-6" id="footprint">
                <div className="container">

                    <div className="login_section">
                        <h3>Footprint</h3>
                        <p className="mb-10">Calculate your carbon footprint</p>
                        <form className="form">
                            <p>Electricity (kWh/Yr) - Emission Factor(0.85) </p>
                            <div className="input_section">
                                <input
                                    value={electricity}
                                    onChange={(e) => setElectricity(e.target.value)}
                                    type="number"
                                    placeholder="Electricity (kWh/Yr)"
                                />
                            </div>

                            <p>Petrol (Ltr/Yr) - Emission Factor(2.296) </p>
                            <div className="input_section">
                                <input
                                    value={petrol}
                                    onChange={(e) => setPetrol(e.target.value)}
                                    type="number"
                                    placeholder="Petrol (Ltr/Yr)"
                                />
                            </div>


                            <p>Diesel (Ltr/Yr) - Emission Factor(2.653) </p>
                            <div className="input_section">
                                <input
                                    value={diesel}
                                    onChange={(e) => setDiesel(e.target.value)}
                                    type="number"
                                    placeholder="Diesel (Ltr/Yr)"
                                />
                            </div>

                            <p>LPG (Kg/Yr) - Emission Factor(2.983) </p>
                            <div className="input_section">
                                <input
                                    value={lpg}
                                    onChange={(e) => setLpg(e.target.value)}
                                    type="number"
                                    placeholder="LPG (Kg/Yr)"
                                />
                            </div>


                            <button onClick={(e) => login(e)} className="login_button">
                                {loading ? (
                                    <>
                                        <ClipLoader
                                            aria-label="Loading Spinner"
                                            color="#fff"
                                            loading={loading}
                                            size={20}
                                        />
                                    </>
                                ) : (
                                    "Calculate"
                                )}

                            </button>
                            <div className="input_section">
                                <input
                                    disabled
                                    value={emission}
                                    onChange={(e) => setEmission(e.target.value)}
                                    type="text"
                                    placeholder="Emission"

                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footprint;
