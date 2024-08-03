import React from 'react';
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact: React.FC = () => {
    return (
        <div id="contact" className="w-full min-h-screen flex flex-col items-center justify-center bg-black p-4">
            <h1 className="text-xl font-bold mb-8 text-center text-white">Contact Information</h1>
            <div className="flex flex-col space-y-4">
                <div className="flex justify-center items-center space-x-4">
                    <FaUser className="text-white" />
                    <span className="text-white">Samyak Singhal</span>
                    <FaEnvelope className="text-white" />
                    <span className="text-white">samyaksinghal2003@gmail.com</span>
                    <FaPhone className="text-white" />
                    <span className="text-white">+91 8105695390</span>
                </div>
                <div className="flex justify-center items-center space-x-4">
                    <FaUser className="text-white" />
                    <span className="text-white">Rayaan Sattar</span>
                    <FaEnvelope className="text-white" />
                    <span className="text-white">satarrayan@gmail.com</span>
                    <FaPhone className="text-white" />
                    <span className="text-white">+91 7204679328</span>
                </div>
            </div>
        </div>
    );
};

export default Contact;
