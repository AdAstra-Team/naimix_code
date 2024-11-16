import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Popup() {
    const popup = useSelector( (state) => state.popup);
    var visible = popup.visible;

    useEffect(() => {
        let timeout;
        if (visible) {
            timeout = setTimeout(() => {
                setVisible(false);
            }, 3000);
        }
        return () => clearTimeout(timeout);
    }, [visible]);

    const ShowPopup = () => {
        setVisible(true);
    };

    return (
        <>
            <button onClick={ShowPopup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Показать попап
            </button>
            {visible && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 shadow-md rounded-lg">
                    Ура!
                </div>
            )}
        </>
    );
}