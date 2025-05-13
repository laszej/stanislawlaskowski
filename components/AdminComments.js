import { useState, useEffect } from 'react';

const AdminComments = ({ collection }) => {
  const [blogs, setBlogs] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [loadingId, setLoadingId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/api/blogs?collection=${collection}`);
      const data = await res.json();
      setBlogs(data);
    }
    fetchData();
  }, [deleted, collection]);

  const handleDelete = async (id) => {
    setLoadingId(id);
    try {
      const response = await fetch('/api/deleteblog', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, collection }),
      });

      if (!response.ok) throw new Error('Błąd usuwania');
      setDeleted(prev => !prev);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div style={{ margin: "0 auto", maxWidth: "70%", display: "flex", flexDirection: "column-reverse" }}>
      {blogs.map((blog) => (
        <div className="card mb-3" key={blog._id}>
          <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <p className="card-text">{blog.content}</p>
            <button
              onClick={() => handleDelete(blog._id)}
              className="btn btn-danger"
              disabled={loadingId === blog._id}
            >
              {loadingId === blog._id ? 'Usuwanie...' : 'Usuń'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminComments;