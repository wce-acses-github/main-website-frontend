import { useState } from 'react';
import './AdminComponent.css';
import { useAuth } from '../../context/authContext';

const AdminComponent = () => {
    const [eventFormVisible, setEventFormVisible] = useState(false);
    const [deleteConfirmationVisible, setDeleteConfirmationVisible] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [deleteType, setDeleteType] = useState('');
    const { logout } = useAuth(); 
    
    const handleDeleteTeam = (boardType) => {
        console.log(`Deleting team with board type: ${boardType}`);
    };

    const handlePromoteToMentor = (e) => {
        e.preventDefault();
        console.log("Promoting to mentor with file: ", e.target.files[0]);
    };

    const handleAddBoardInfo = (e) => {
        e.preventDefault();
        console.log("Adding board info with file: ", e.target.files[0]);
    };

    const handleAddEvent = (e) => {
        e.preventDefault();
        console.log("Adding event");
        setEventFormVisible(false);
    };

    const handleOpenDeleteConfirmation = () => {
        const boardType = document.querySelector('input[name="boardType"]:checked');
        if (boardType) {
            setDeleteType('team');
            setDeleteConfirmationVisible(true);
        } else {
            console.log("Please select a board type.");
        }
    };

    const handleDelete = () => {
        if (deleteType === 'team') {
            const boardType = document.querySelector('input[name="boardType"]:checked');
            if (boardType) {
                handleDeleteTeam(boardType.value);
            } else {
                console.log("Please select a board type.");
            }
        } else if (deleteType === 'event') {
            console.log(`Deleting event with index: ${deleteIndex}`);
        }
        setDeleteConfirmationVisible(false);
        setDeleteIndex(null);
        setDeleteType('');
    };

    const handleConvertEventToPast = () => {
        console.log("Converting event to past");
    };

    return (
        <div className="admin-container">
            <h1>Admin Page</h1>
            <div className="admin-section">
                <h2>Team Page Management</h2>
                <div className="admin-option">
                    <h3>Delete Board Information by Board Type</h3>
                    <label>
                        <input type="radio" name="boardType" value="mentor" />
                        Mentor Board
                    </label>
                    <label>
                        <input type="radio" name="boardType" value="assistant" />
                        Assistant Board
                    </label>
                    <button className="admin-button" onClick={handleOpenDeleteConfirmation}>Delete</button>
                </div>
                <div className="admin-option">
                    <h3>Promote Main Board to Mentor Board</h3>
                    <label>Upload Tenure Experience File</label>
                    <input id="promoteToMentorFile" type="file" accept=".xlsx, .xls" onChange={handlePromoteToMentor} />
                    <button className="admin-button" onClick={handlePromoteToMentor}>Submit</button>
                </div>
                <div className="admin-option">
                    <h3>Add New Board</h3>
                    <label>Upload Board Info File</label>
                    <input id="addBoardInfoFile" type="file" accept=".xlsx, .xls" onChange={handleAddBoardInfo} />
                    <button className="admin-button" onClick={handleAddBoardInfo}>Submit</button>
                </div>
            </div>
            <div className="admin-section">
                <h2>Event Page Management</h2>
                <div className="admin-option">
                    <h3>Add Event Info</h3>
                    <button className="admin-button" onClick={() => setEventFormVisible(true)}>Add</button>
                    {eventFormVisible && (
                        <div className="modal">
                            <div className="modal-content">
                                <span className="close-button" onClick={() => setEventFormVisible(false)}>&times;</span>
                                <form className="event-form" onSubmit={handleAddEvent}>
                                    <label>
                                        Event Name:
                                        <input type="text" required />
                                    </label>
                                    <label>
                                        Event Description:
                                        <textarea required></textarea>
                                    </label>
                                    <label>
                                        Poster:
                                        <input type="file" accept="image/*" required />
                                    </label>
                                    <div>
                                        <label>
                                            <input type="radio" name="eventType" value="cs" required />
                                            CS
                                        </label>
                                        <label>
                                            <input type="radio" name="eventType" value="mega" required />
                                            Mega
                                        </label>
                                        <label>
                                            <input type="radio" name="eventType" value="activity" required />
                                            Activity
                                        </label>
                                    </div>
                                    <button type="submit" className="submit-button">Submit</button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
                <div className="admin-option">
                    <h3>Delete Event by Index</h3>
                    <input type="number" min="0" />
                    <button className="admin-button" onClick={() => handleOpenDeleteConfirmation('event', document.querySelector('.admin-option input[type="number"]').value)}>Delete</button>
                </div>
                <div className="admin-option">
                    <h3>Convert Event to Past</h3>
                    <button className="admin-button" onClick={handleConvertEventToPast}>Convert</button>
                </div>
            </div>
            {deleteConfirmationVisible && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={() => setDeleteConfirmationVisible(false)}>&times;</span>
                        <p>Are you sure you want to delete this {deleteType === 'team' ? 'team' : `event with index ${deleteIndex}`}?</p>
                        <button className="admin-button" onClick={handleDelete}>Yes, Delete</button>
                        <button className="admin-button" onClick={() => setDeleteConfirmationVisible(false)}>Cancel</button>
                    </div>
                </div>
            )}
            <div className="logout-button">
                <button className="admin-button" onClick={logout}>Logout</button>
            </div>
        </div>
    );
};

export default AdminComponent;
