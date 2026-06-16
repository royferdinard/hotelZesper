
// import React, { useState } from "react";
// import {
//   FaHeart,
//   FaRegHeart,
//   FaComment,
//   FaShare,
//   FaBell,
//   FaUserPlus,
//   FaEllipsisH,
//   FaPaperPlane,
// } from "react-icons/fa";

// const initialBlogs = [
//   {
//     id: 1,
//     title: "Luxury Weekend Experience at Hotel Zesper",
//     author: "Grace Wanjiku",
//     date: "June 3, 2026",
//     image:
//       "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
//     description:
//       "Experience premium luxury at Hotel Zesper with elegant suites, spa services, breathtaking dining and unforgettable weekend moments designed for relaxation and comfort.",
//     likes: 154,
//     comments: [
//       {
//         id: 1,
//         user: "James Mwangi",
//         text: "The rooms look amazing 🔥",
//         time: "2h ago",
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "Best Wedding Destination in Nairobi",
//     author: "Hotel Zesper Events Team",
//     date: "May 29, 2026",
//     image:
//       "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200",
//     description:
//       "Celebrate your dream wedding with elegant decorations, luxury accommodation, premium catering and unforgettable event spaces at Hotel Zesper.",
//     likes: 214,
//     comments: [],
//   },
//   {
//     id: 3,
//     title: "Taste Premium Dining at Zesper",
//     author: "Chef Amanda",
//     date: "May 25, 2026",
//     image:
//       "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200",
//     description:
//       "Enjoy delicious breakfast, lunch and dinner experiences prepared by world-class chefs using fresh premium ingredients.",
//     likes: 96,
//     comments: [],
//   },
// ];

// const BlogPage = () => {

  const { t, i18n } = useTranslation();

//   const [blogs, setBlogs] = useState(initialBlogs);
//   const [openComment, setOpenComment] =
//     useState(null);
//   const [commentText, setCommentText] =
//     useState("");
//   const [likedBlogs, setLikedBlogs] =
//     useState([]);
//   const [following, setFollowing] =
//     useState(false);
//   const [subscribed, setSubscribed] =
//     useState(false);

//   // Like Blog
//   const toggleLike = (id) => {
//     setBlogs((prev) =>
//       prev.map((blog) =>
//         blog.id === id
//           ? {
//               ...blog,
//               likes: likedBlogs.includes(id)
//                 ? blog.likes - 1
//                 : blog.likes + 1,
//             }
//           : blog
//       )
//     );

//     setLikedBlogs((prev) =>
//       prev.includes(id)
//         ? prev.filter((item) => item !== id)
//         : [...prev, id]
//     );
//   };

//   // Add Comment
//   const addComment = (blogId) => {
//     if (!commentText.trim()) return;

//     setBlogs((prev) =>
//       prev.map((blog) =>
//         blog.id === blogId
//           ? {
//               ...blog,
//               comments: [
//                 ...blog.comments,
//                 {
//                   id: Date.now(),
//                   user: "You",
//                   text: commentText,
//                   time: "Now",
//                 },
//               ],
//             }
//           : blog
//       )
//     );

//     setCommentText("");
//   };

//   return (
//     <section className="min-h-screen bg-slate-100 py-24 px-4 md:px-10">

//       {/* Header */}
//       <div className="text-center mb-14">
//         <h1 className="text-5xl font-bold text-slate-900">
//           Hotel Zesper Blogs
//         </h1>

//         <p className="text-slate-500 mt-3 text-lg">
//           Discover luxury experiences,
//           travel inspiration and unforgettable
//           moments at Hotel Zesper.
//         </p>
//       </div>

//       {/* Blog Feed */}
//       <div className="max-w-4xl mx-auto space-y-10">
//         {blogs.map((blog) => (
//           <div
//             key={blog.id}
//             className="bg-white rounded-[30px] overflow-hidden shadow-xl border border-slate-200"
//           >
//             {/* Top */}
//             <div className="flex items-center justify-between p-6">

//               <div className="flex gap-4 items-center">
//                 <img
//                   src={`https://ui-avatars.com/api/?name=${blog.author}`}
//                   alt=""
//                   className="w-14 h-14 rounded-full"
//                 />

//                 <div>
//                   <h3 className="font-bold text-lg">
//                     {blog.author}
//                   </h3>

//                   <p className="text-sm text-slate-500">
//                     {blog.date}
//                   </p>
//                 </div>
//               </div>

//               <button className="text-slate-500 text-xl">
//                 <FaEllipsisH />
//               </button>
//             </div>

//             {/* Image */}
//             <img
//               src={blog.image}
//               alt=""
//               className="w-full h-[400px] object-cover"
//             />

//             {/* Content */}
//             <div className="p-6">

//               <h2 className="text-2xl font-bold text-slate-900">
//                 {blog.title}
//               </h2>

//               <p className="text-slate-600 mt-4 leading-8">
//                 {blog.description}
//               </p>

//               {/* Stats */}
//               <div className="flex justify-between mt-5 text-sm text-slate-500 border-b pb-4">
//                 <span>
//                   {blog.likes} likes
//                 </span>

//                 <span>
//                   {blog.comments.length}
//                   {" "}comments
//                 </span>
//               </div>

//               {/* Actions */}
//               <div className="flex items-center justify-between mt-4 flex-wrap gap-3">

//                 <button
//                   onClick={() =>
//                     toggleLike(blog.id)
//                   }
//                   className="flex items-center gap-2 px-4 py-3 rounded-2xl hover:bg-slate-100 transition"
//                 >
//                   {likedBlogs.includes(
//                     blog.id
//                   ) ? (
//                     <FaHeart className="text-red-500" />
//                   ) : (
//                     <FaRegHeart />
//                   )}
//                   Like
//                 </button>

//                 <button
//                   onClick={() =>
//                     setOpenComment(
//                       openComment === blog.id
//                         ? null
//                         : blog.id
//                     )
//                   }
//                   className="flex items-center gap-2 px-4 py-3 rounded-2xl hover:bg-slate-100 transition"
//                 >
//                   <FaComment />
//                   Comment
//                 </button>

//                 <button className="flex items-center gap-2 px-4 py-3 rounded-2xl hover:bg-slate-100 transition">
//                   <FaShare />
//                   Share
//                 </button>

//                 <button
//                   onClick={() =>
//                     setFollowing(!following)
//                   }
//                   className="flex items-center gap-2 px-4 py-3 rounded-2xl hover:bg-slate-100 transition"
//                 >
//                   <FaUserPlus />
//                   {following
//                     ? "Following"
//                     : "Follow"}
//                 </button>

//                 <button
//                   onClick={() =>
//                     setSubscribed(
//                       !subscribed
//                     )
//                   }
//                   className="flex items-center gap-2 px-4 py-3 rounded-2xl hover:bg-slate-100 transition"
//                 >
//                   <FaBell />
//                   {subscribed
//                     ? "Subscribed"
//                     : "Subscribe"}
//                 </button>

//                 {/* Three dots */}
//                 <button className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-slate-100">
//                   <FaEllipsisH />
//                 </button>
//               </div>

//               {/* Comment Input */}
//               {openComment ===
//                 blog.id && (
//                 <div className="mt-6 border-t pt-5">

//                   <div className="flex gap-3">
//                     <img
//                       src="https://ui-avatars.com/api/?name=You"
//                       alt=""
//                       className="w-12 h-12 rounded-full"
//                     />

//                     <div className="flex-1 flex gap-2">
//                       <input
//                         type="text"
//                         placeholder="Write a comment..."
//                         value={
//                           commentText
//                         }
//                         onChange={(e) =>
//                           setCommentText(
//                             e.target.value
//                           )
//                         }
//                         className="w-full bg-slate-100 rounded-full px-5 py-3 outline-none"
//                       />

//                       <button
//                         onClick={() =>
//                           addComment(
//                             blog.id
//                           )
//                         }
//                         className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center"
//                       >
//                         <FaPaperPlane />
//                       </button>
//                     </div>
//                   </div>

//                   {/* Comments */}
//                   <div className="mt-5 space-y-4">
//                     {blog.comments.map(
//                       (comment) => (
//                         <div
//                           key={
//                             comment.id
//                           }
//                           className="flex gap-3"
//                         >
//                           <img
//                             src={`https://ui-avatars.com/api/?name=${comment.user}`}
//                             alt=""
//                             className="w-10 h-10 rounded-full"
//                           />

//                           <div className="bg-slate-100 rounded-[20px] p-4 w-fit max-w-[80%]">
//                             <div className="flex gap-3 items-center">
//                               <h4 className="font-semibold text-sm">
//                                 {
//                                   comment.user
//                                 }
//                               </h4>

//                               <span className="text-xs text-slate-500">
//                                 {
//                                   comment.time
//                                 }
//                               </span>
//                             </div>

//                             <p className="text-slate-700 mt-1">
//                               {
//                                 comment.text
//                               }
//                             </p>
//                           </div>
//                         </div>
//                       )
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default BlogPage;


import React, { useState, useTranslation } from "react";
import { useTranslation } from 'react-i18next';
import {
  FaHeart,
  FaRegHeart,
  FaCommentDots,
  FaBell,
  FaUserPlus,
  FaShare,
  FaEllipsisH,
  FaTimes,
  FaPaperPlane,
  FaCalendarAlt,
  FaUser,
} from "react-icons/fa";

const blogsData = [
  {
    id: 1,
    title: "Luxury Weekend Experience at Hotel Zesper",
    author: "Grace Wanjiku",
    date: "June 4, 2026",
    category: "Luxury Stay",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
    shortDescription:
      "Enjoy a premium luxury experience with elegant suites, spa relaxation and unforgettable moments.",
    fullDescription:
      "At Hotel Zesper, every weekend transforms into a luxury escape. Guests enjoy premium suites, spa sessions, breathtaking dining experiences, personalized room service, rooftop relaxation and luxury accommodations crafted for unforgettable comfort. Whether for family vacations, romantic getaways or solo relaxation, Hotel Zesper creates lasting memories.",
    likes: 145,
    comments: [
      {
        id: 1,
        name: "James Mwangi",
        text: "Looks amazing! Definitely visiting soon 🔥",
        time: "2h ago",
      },
    ],
  },

  {
    id: 2,
    title: "Dream Wedding Destination",
    author: "Hotel Zesper Events Team",
    date: "May 30, 2026",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200",
    shortDescription:
      "Celebrate your dream wedding in elegance and luxury.",
    fullDescription:
      "Hotel Zesper offers world-class wedding venues with elegant decoration, luxury dining, premium accommodation and event planning services tailored to create unforgettable wedding experiences.",
    likes: 98,
    comments: [],
  },

  {
    id: 3,
    title: "Premium Dining Experience",
    author: "Chef Amanda",
    date: "May 26, 2026",
    category: "Dining",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200",
    shortDescription:
      "Taste unforgettable breakfast, lunch and dinner experiences.",
    fullDescription:
      "Our chefs craft exceptional dishes from fresh premium ingredients. Guests enjoy luxury dining spaces, professional hospitality and unforgettable culinary moments.",
    likes: 76,
    comments: [],
  },
];

const BlogPage = () => {
  const [blogs, setBlogs] = useState(blogsData);
  const [selectedBlog, setSelectedBlog] =
    useState(null);

  const [liked, setLiked] = useState({});
  const [following, setFollowing] =
    useState(false);

  const [subscribed, setSubscribed] =
    useState(false);

  const [showCommentInput, setShowCommentInput] =
    useState(false);

  const [commentText, setCommentText] =
    useState("");

  // LIKE
  const handleLike = (id) => {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));

    setBlogs((prev) =>
      prev.map((blog) =>
        blog.id === id
          ? {
              ...blog,
              likes: liked[id]
                ? blog.likes - 1
                : blog.likes + 1,
            }
          : blog
      )
    );
  };

  // COMMENT
  const addComment = () => {
    if (!commentText.trim()) return;

    const updatedBlog = {
      ...selectedBlog,
      comments: [
        ...selectedBlog.comments,
        {
          id: Date.now(),
          name: "You",
          text: commentText,
          time: "Just now",
        },
      ],
    };

    setSelectedBlog(updatedBlog);

    setBlogs((prev) =>
      prev.map((blog) =>
        blog.id === selectedBlog.id
          ? updatedBlog
          : blog
      )
    );

    setCommentText("");
  };

  return (
    <section className="min-h-screen bg-slate-100 py-24 px-5 md:px-14">

      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-bold text-slate-900">
          Hotel Zesper Blog
        </h1>

        <p className="text-slate-500 mt-4 text-lg">
          Discover luxury hospitality,
          premium experiences and travel
          inspiration.
        </p>
      </div>

      {/* BLOG CARDS */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-[30px] overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-72 w-full object-cover"
            />

            <div className="p-6">

              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                {blog.category}
              </span>

              <h2 className="text-2xl font-bold mt-4 text-slate-900">
                {blog.title}
              </h2>

              <p className="text-slate-600 mt-3 line-clamp-3">
                {blog.shortDescription}
              </p>

              {/* AUTHOR */}
              <div className="flex items-center justify-between mt-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <FaUser />
                  {blog.author}
                </div>

                <div className="flex items-center gap-2">
                  <FaCalendarAlt />
                  {blog.date}
                </div>
              </div>

              {/* BUTTON */}
              <button
                onClick={() =>
                  setSelectedBlog(blog)
                }
                className="w-full mt-6 bg-gradient-to-r from-blue-700 to-blue-500 text-white py-4 rounded-2xl font-semibold hover:scale-[1.02] transition"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* BLOG MODAL */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/70 z-50 overflow-y-auto p-4">

          <div className="max-w-5xl mx-auto bg-white rounded-[35px] overflow-hidden relative animate-fadeIn">

            {/* CLOSE */}
            <button
              onClick={() =>
                setSelectedBlog(null)
              }
              className="absolute top-5 right-5 bg-white shadow-lg w-12 h-12 rounded-full flex items-center justify-center z-20"
            >
              <FaTimes />
            </button>

            {/* HERO IMAGE */}
            <img
              src={selectedBlog.image}
              alt=""
              className="w-full h-[450px] object-cover"
            />

            <div className="p-8 md:p-12">

              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
                {selectedBlog.category}
              </span>

              <h1 className="text-4xl font-bold mt-5 text-slate-900">
                {selectedBlog.title}
              </h1>

              {/* AUTHOR */}
              <div className="flex flex-wrap gap-5 mt-5 text-slate-500">
                <span>
                  By {selectedBlog.author}
                </span>

                <span>
                  {selectedBlog.date}
                </span>
              </div>

              {/* CONTENT */}
              <p className="mt-8 text-slate-700 leading-9 text-lg">
                {
                  selectedBlog.fullDescription
                }
              </p>

              {/* ACTIONS */}
              <div className="flex flex-wrap gap-3 mt-10 border-y py-5">

                <button
                  onClick={() =>
                    handleLike(
                      selectedBlog.id
                    )
                  }
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200"
                >
                  {liked[
                    selectedBlog.id
                  ] ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart />
                  )}
                  Like (
                  {
                    blogs.find(
                      (b) =>
                        b.id ===
                        selectedBlog.id
                    )?.likes
                  }
                  )
                </button>

                <button
                  onClick={() =>
                    setShowCommentInput(
                      !showCommentInput
                    )
                  }
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200"
                >
                  <FaCommentDots />
                  Comment
                </button>

                <button className="flex items-center gap-2 px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200">
                  <FaShare />
                  Share
                </button>

                <button
                  onClick={() =>
                    setFollowing(
                      !following
                    )
                  }
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200"
                >
                  <FaUserPlus />
                  {following
                    ? "Following"
                    : "Follow"}
                </button>

                <button
                  onClick={() =>
                    setSubscribed(
                      !subscribed
                    )
                  }
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200"
                >
                  <FaBell />
                  {subscribed
                    ? "Subscribed"
                    : "Subscribe"}
                </button>

                <button className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                  <FaEllipsisH />
                </button>
              </div>

              {/* COMMENT INPUT */}
              {showCommentInput && (
                <div className="mt-8">
                  <div className="flex gap-3">
                    <img
                      src="https://ui-avatars.com/api/?name=You"
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />

                    <div className="flex-1 flex gap-2">
                      <input
                        value={
                          commentText
                        }
                        onChange={(e) =>
                          setCommentText(
                            e.target.value
                          )
                        }
                        placeholder="Write a comment..."
                        className="w-full rounded-full bg-slate-100 px-5 outline-none"
                      />

                      <button
                        onClick={
                          addComment
                        }
                        className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center"
                      >
                        <FaPaperPlane />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* COMMENTS */}
              <div className="space-y-5 mt-8">
                {selectedBlog.comments.map(
                  (comment) => (
                    <div
                      key={comment.id}
                      className="flex gap-4"
                    >
                      <img
                        src={`https://ui-avatars.com/api/?name=${comment.name}`}
                        alt=""
                        className="w-12 h-12 rounded-full"
                      />

                      <div className="bg-slate-100 rounded-[20px] p-4 max-w-[80%]">
                        <div className="flex gap-3 items-center">
                          <h4 className="font-semibold">
                            {
                              comment.name
                            }
                          </h4>

                          <span className="text-sm text-slate-500">
                            {
                              comment.time
                            }
                          </span>
                        </div>

                        <p className="mt-2 text-slate-700">
                          {
                            comment.text
                          }
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogPage;


