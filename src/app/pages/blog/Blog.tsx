"use client"
import NavBar from "@/app/components/organism/landingPage/navBar"
import React, { useState, useEffect } from "react"

type BlogType = {
  ID: number
  blog_name: string
  blog_title: string
  blog_description: string
}

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([])
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ blog_name: "", blog_title: "", blog_description: "" })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch("https://sea-venture.org/api/blogs/")
        if (!res.ok) throw new Error("Failed to fetch blogs")
        const data = await res.json()
        setBlogs(data)
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError("Failed to fetch blogs")
        }
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Post new blog to API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.blog_name || !form.blog_title || !form.blog_description) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("https://sea-venture.org/api/blogs/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error("Failed to add blog")
      const newBlog = await res.json()
      setBlogs([...blogs, newBlog])
      setForm({ blog_name: "", blog_title: "", blog_description: "" })
      setShowForm(false)
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("Failed to add blog")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e3f0ff 0%, #f7fbff 100%)",
        padding: "2rem 0",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        <h1
          style={{
            color: "#1e3c72",
            fontSize: "2.8rem",
            fontWeight: 800,
            textAlign: "center",
            marginBottom: "2.5rem",
            letterSpacing: "1.5px",
            textShadow: "0 2px 12px #b3d1f7",
          }}
        >
          <NavBar />
          Sri Lanka Travel Blog
        </h1>
        {loading && <p style={{ textAlign: "center", color: "#2563eb" }}>Loading...</p>}
        {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            style={{
              background: "#f0f6ff",
              borderRadius: "1rem",
              padding: "2.5rem",
              marginBottom: "2rem",
              boxShadow: "0 4px 16px 0 rgba(30,60,114,0.08)",
              maxWidth: 800,
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              position: "fixed",
              bottom: "6rem",
              right: "2rem",
              zIndex: 1001,
            }}
          >
            <input
              name="blog_name"
              placeholder="Blog Name"
              value={form.blog_name}
              onChange={handleChange}
              style={{
                padding: "0.7rem",
                borderRadius: "0.5rem",
                border: "1px solid #b3d1f7",
                fontSize: "1rem",
              }}
              required
            />
            <input
              name="blog_title"
              placeholder="Blog Title"
              value={form.blog_title}
              onChange={handleChange}
              style={{
                padding: "0.7rem",
                borderRadius: "0.5rem",
                border: "1px solid #b3d1f7",
                fontSize: "1rem",
              }}
              required
            />
            <textarea
              name="blog_description"
              placeholder="Blog Description"
              value={form.blog_description}
              onChange={handleChange}
              rows={4}
              style={{
                padding: "0.7rem",
                borderRadius: "0.5rem",
                border: "1px solid #b3d1f7",
                fontSize: "1rem",
                resize: "vertical",
              }}
              required
            />
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                style={{
                  background: "#e3f0ff",
                  color: "#1e3c72",
                  border: "none",
                  borderRadius: "0.7rem",
                  padding: "0.7rem 1.5rem",
                  fontWeight: 600,
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={{
                  background: "linear-gradient(90deg, #4f8cff 0%, #2a5298 100%)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "0.7rem",
                  padding: "0.7rem 1.5rem",
                  fontWeight: 600,
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
                disabled={loading}
              >
                Add Blog
              </button>
            </div>
          </form>
        )}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {blogs.map((blog) => (
            <div
              key={blog.ID}
              style={{
                background: "linear-gradient(120deg, #f0f6ff 60%, #e3f0ff 100%)",
                borderRadius: "1.5rem",
                boxShadow: "0 8px 32px 0 rgba(30,60,114,0.10)",
                padding: "2.2rem 1.7rem",
                display: "flex",
                flexDirection: "column",
                border: "1.5px solid #b3d1f7",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px) scale(1.03)"
                  ; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 40px 0 rgba(30,60,114,0.18)"
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "none"
                  ; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px 0 rgba(30,60,114,0.10)"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "8px",
                  background: "linear-gradient(90deg, #4f8cff 0%, #2a5298 100%)",
                  borderTopLeftRadius: "1.5rem",
                  borderTopRightRadius: "1.5rem",
                  opacity: 0.7,
                }}
              />
              <h2
                style={{
                  color: "#2563eb",
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                  letterSpacing: "0.5px",
                }}
              >
                {blog.blog_name}
              </h2>
              <h3
                style={{
                  color: "#1e3c72",
                  fontSize: "1.08rem",
                  fontWeight: 500,
                  marginBottom: "1.1rem",
                  opacity: 0.85,
                }}
              >
                {blog.blog_title}
              </h3>
              <p
                style={{
                  color: "#3b4a6b",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  marginBottom: 0,
                  opacity: 0.95,
                }}
              >
                {blog.blog_description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Floating Create Blog Button */}
      <button
        onClick={() => setShowForm(true)}
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "linear-gradient(90deg, #4f8cff 0%, #2a5298 100%)",
          color: "#fff",
          border: "none",
          boxShadow: "0 4px 16px 0 rgba(30,60,114,0.18)",
          fontSize: "2rem",
          fontWeight: 700,
          cursor: "pointer",
          zIndex: 1000,
          display: showForm ? "none" : "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-label="Create Blog"
        title="Create Blog"
      >
        +
      </button>
    </div>
  )
}

export default Blog