import React, { useState, useEffect } from 'react';
import { useAuth } from '../auth';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Table } from 'react-bootstrap';

const AdminPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [deleteShow, setDeleteShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (!user || !user.isAdmin) {
      navigate('/login');
    } else {
      fetch('/api/admin/users')
        .then(response => response.json())
        .then(data => setUsers(data));
    }
  }, [user, navigate]);

  const handleDeleteUser = () => {
    fetch(`/api/admin/users/${selectedUser.id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(() => {
        setUsers(users.filter(user => user.id !== selectedUser.id));
        setDeleteShow(false);
      });
  };

  const handleShowDeleteModal = user => {
    setSelectedUser(user);
    setDeleteShow(true);
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Button variant="danger" onClick={() => handleShowDeleteModal(user)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={deleteShow} onHide={() => setDeleteShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete {selectedUser && selectedUser.name}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setDeleteShow(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteUser}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminPage;