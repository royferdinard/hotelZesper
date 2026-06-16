import React from 'react'
import BlogsData from './blogPostStore'
import { useState } from 'react'
import { CheckCircle, Share2 } from 'lucide-react'
import { Globe } from 'lucide-react'
import { Download } from 'lucide-react'
import { BeatLoader } from "react-spinners";
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
import { ThumbsUp, MessageCircle, Share, Users, User2, User2Icon } from "lucide-react";
import { FaComment } from 'react-icons/fa'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { use } from 'react'
import { ThumbsDown } from 'lucide-react'
import { FaRegThumbsUp } from 'react-icons/fa'
import { FaThumbsDown } from 'react-icons/fa'
import { Eye } from 'lucide-react'
import CommentPopUp from '../popup/chat/commentPopup'
import { useRef } from 'react'
import { useEffect } from 'react'
import ImagePopup from '../popup/chat/imagePopup'
import { useTranslation } from 'react-i18next'
import { jsPDF } from "jspdf";

function BlogPost({ blogs }) {

    const { t, i18n } = useTranslation();

  {/**like per post */ }
  const [likesState, setLikesState] = useState({});
  const [unLikesState, setUnLikesState] = useState({});
  const [wishState, setWishState] = useState({});
  const [followState, setFollowState] = useState({});
  const [subscribeState, setSubscribeState] = useState({});
  const [viewState, setViewState] = useState({});
  const [notificationState, setNotificationState] = useState({});
  const [openComment, setOpenComment] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState({});
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem("blogComments")) || {};
    setComments(savedComments);
  }, []);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("blogShares")) || {};
    setShareState(saved);
  }, []);
  const [shareState, setShareState] = useState({});
  const [openImage, setOpenImage] = useState(null)
  {/**like function */ }
  const handleLike = (id) => {
    setLikesState((prev) => {
      const isLiked = prev[id]?.liked;

      const updated = {
        ...prev,
        [id]: {
          liked: !isLiked,
          count: isLiked
            ? (prev[id]?.count || 1) - 1
            : (prev[id]?.count || 0) + 1,
        },
      };

      toast.success(
        !isLiked
          ? t("Successfully liked the post 👍👍")
          : t("Successfully unliked the post 👎👎")
      );

      return updated;
    });
  };

  //wish function
  const handleWish = (id) => {
    setWishState((prev) => {
      const isWished = prev[id]?.wished;
      const updated = {
        ...prev,
        [id]: {
          wished: !isWished,
          count: isWished
            ? (prev[id]?.count || 1) - 1
            : (prev[id]?.count || 0) + 1,
        },
      };

      toast.success(
        !isWished
          ? t("Successfully ❤️❤️❤️")
          : t("Successfully 💔💔💔")
      );

      return updated;
    })
  }


  {/**unlike function */ }
  const handleUnLike = (id) => {
    setUnLikesState((prev) => {
      const isUnLiked = prev[id]?.unLiked;

      const updated = {
        ...prev,
        [id]: {
          unLiked: !isUnLiked,
          count: isUnLiked
            ? (prev[id]?.count || 1) - 1
            : (prev[id]?.count || 0) + 1,
        },
      };

      toast.success(
        !isUnLiked
          ? t("Successfully Unliked the post 👎👎")
          : t("Successfully canceled the unlike the post 👎👎")
      );

      return updated;
    });
  };




  {/**follow function */ }
  const handleFollow = (id) => {
    setFollowState((prev) => {
      const isFollowed = prev[id]?.followed;

      const updated = {
        ...prev,
        [id]: {
          followed: !isFollowed,
          count: isFollowed
            ? (prev[id]?.count || 1) - 1
            : (prev[id]?.count || 0) + 1,
        },
      };

      toast.success(
        !isFollowed
          ? t("Successfully Followed the post")
          : t("Successfully Unfollowed the post")
      );

      return updated;
    });
  };




  {/**subscribed */ }
  const handleSubscription = (id) => {
    setSubscribeState((prev) => {
      const isSubscribed = prev[id]?.subscribed;

      const updated = {
        ...prev,
        [id]: {
          subscribed: !isSubscribed,
          count: isSubscribed
            ? (prev[id]?.count || 1) - 1
            : (prev[id]?.count || 0) + 1,
        },
      };

      toast.success(
        !isSubscribed
          ? t("Successfully subscribed to the post")
          : t("Successfully unsubscribe to the post")
      );

      return updated;
    });
  };


  {/**view */ }
  const handleViews = (id) => {
    setViewState((prev) => {
      const isViewed = prev[id]?.viewed;

      const updated = {
        ...prev,
        [id]: {
          viewed: !isViewed,
          count: isViewed
            ? (prev[id]?.count || 1) - 1
            : (prev[id]?.count || 0) + 1,
        },
      };

      toast.success(
        !isViewed
          ? t("Successfully viewed the post")
          : t("Successfully unViewed the post")
      );

      return updated;
    });
  };


  {/**notification */ }
  const handleNotification = (id) => {
    setNotificationState((prev) => {
      const isNotified = prev[id]?.notified;

      const updated = {
        ...prev,
        [id]: {
          notified: !isNotified,
          count: isNotified
            ? (prev[id]?.count || 1) - 1
            : (prev[id]?.count || 0) + 1,
        },
      };

      toast.success(
        !isNotified
          ? t("Successfully activated notification bell")
          : t("Successfully disactivated notification bell")
      );

      return updated;
    });
  };



  const handleComment = (blogId) => {
    if (!commentText.trim()) return;

    const newComment = {
      text: commentText,
      date: new Date().toLocaleString(),
      user: JSON.parse(localStorage.getItem("currentUser")) || {},
    };

    const updatedComments = {
      ...comments,
      [blogId]: [...(comments[blogId] || []), newComment],
    };

    setComments(updatedComments);


    localStorage.setItem("blogComments", JSON.stringify(updatedComments));

    setCommentText("");
  };


  const handleShare = async (blog) => {
    const updated = {
      ...shareState,
      [blog.id]: (shareState[blog.id] || 0) + 1,
    };

    setShareState(updated);
    localStorage.setItem("blogShares", JSON.stringify(updated));

    const shareData = {
      title:"Hotel Zesper",
      title: blog.title || "Check this post",
      text: blog.shortDescription || "Interesting blog post",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        toast.success(
          <div className="flex items-center gap-0">
            {t('Sharing')}<BeatLoader size={6} color="green" />
          </div>
        );
        await navigator.share(shareData);
      } catch (err) {
        console.log(t("Share cancelled"));
        toast.error(t("Share cancelled"));
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert(t("Link copied!"));
      toast.success(t("Link copied!"));
    }
  };

  const handleImageOpening = (img) => {
    return setOpenImage(img)
  }

  const downloadBlogPost = () => {
  const doc = new jsPDF();

  // Example blog data
  const blogPost = {
    title: "Top 10 Luxury Hotel Experiences",
    author: "Hotel Zesper",
    date: "16 June 2026",
    content:
      "Luxury hotels provide premium experiences including spa sessions, fine dining, infinity pools, private suites, and personalized services. Guests enjoy comfort, relaxation, and world-class hospitality."
  };

  // Header
  doc.setFillColor(30, 64, 175);
  doc.rect(0, 0, 210, 35, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("Hotel Zesper Blog", 20, 22);

  // Reset color
  doc.setTextColor(0, 0, 0);

  // Blog Title
  doc.setFontSize(18);
  doc.text(blogPost.title, 20, 50);

  // Meta info
  doc.setFontSize(11);
  doc.setTextColor(100);

  doc.text(
    `Author: ${blogPost.author}`,
    20,
    60
  );

  doc.text(
    `Published: ${blogPost.date}`,
    20,
    68
  );

  // Content
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(12);

  const splitText =
    doc.splitTextToSize(
      blogPost.content,
      170
    );

  doc.text(
    splitText,
    20,
    85
  );

  // Save PDF
  doc.save("blog-post.pdf");
};


  return (
    <>
      <ToastContainer autoClose={3000} position='top-right' />

      <div className="w-full md:w-full pb-4 bg-transparent flex flex-col items-center justify-center gap-8">

        {blogs.map((blog) => (

          <div key={blog.id} className="w-full p-4 bg-white rounded-sm shadow-sm dark:bg-slate-900 dark:border dark:border-slate-700" >

            {/* Header */}
            <div className="flex items-start justify-between">

              <div className="flex flex-row items-start justify-start gap-2">

                <div className="w-9 h-9 flex flex-col items-center justify-center rounded-full overflow-hidden">
                  <img
                    onClick={() => handleImageOpening(blog.image)}
                    src={blog.image}
                    alt=""
                    className='w-full h-full object-center'
                  />
                </div>

                <div className="flex flex-col items-start justify-start gap-1">

                  <div className="flex flex-row items-center justify-center gap-3">
                    <h6 className='text-slate-600 font-bold text-md dark:text-gray-100'>{t(blog.author)}</h6>
                    <button className="text-sm text-blue-600 transition-all duration-300 hover:text-blue-800">
                      <CheckCircle size={14} />
                    </button>
                    {/* <button className='text-blue-600 text-sm transition-all duration-300 hover:text-blue-800 hover:underline'>
                      Follow
                    </button> */}
                    <button
                      onClick={() => handleFollow(blog.id)}
                      className={`text-sm transition-all duration-300 hover:text-gray-800 ${followState[blog.id]?.followed
                        ? "text-blue-600"
                        : "text-blue-400"
                        }`}
                    >
                      {
                        followState[blog.id]?.followed ? (
                          <span className="">{t('Followed')}</span>
                        ) : (
                          <span className="">{t('Follow')}</span>
                        )
                      }
                    </button>
                  </div>

                  <div className="flex flex-row items-center justify-start gap-3">
                    <span className="text-xs text-gray-500 dark:text-slate-200">{blog.date}</span>
                    <button onClick={() => handleShare(blog)} className="text-gray-600 transition-all dark:text-gray-200 duration-300 hover:text-blue-600"><Globe size={16} /></button>
                  </div>

                </div>
              </div>

              <div className="flex flex-row items-start justify-start gap-4 text-sm ">
                <button className="w-7 h-7 rounded-full dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-500 flex flex-col items-center justify-center">
                  <FaEllipsisH />
                </button>
                <button className="w-7 h-7 rounded-full dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-500 flex flex-col items-center justify-center">
                  <FaTimes />
                </button>
              </div>

            </div>

            {/* post text and image */}
            <div className="flex flex-col items-start justify-start py-4 gap-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t(blog.fullDescription)}
              </p>

              <div  className="w-full h-96 overflow-hidden flex items-center justify-center">
                <img src={blog.image} alt="" className='w-full h-full' />
              </div>
            </div>

            {/* category*/}
            <div className="flex flex-col items-start justify-start gap-2 w-full">

              <div className="flex flex-row items-center justify-between w-full">
                <p className="text-slate-600 font-bold dark:text-gray-200">{t(blog.category)}</p>
                <button onClick={downloadBlogPost} className="text-slate-600 font-bold dark:text-gray-300"><Download /></button>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-300">{t(blog.shortDescription)}</p>

            </div>

            {/* FOOTER */}
            <div className={'flex flex-row items-center justify-between pt-4 border-t border-gray-200 mt-2 flex-wrap gap-4'}>

              {/* LEFT */}
              <div className="flex flex-row items-center justify-start gap-6">

                {/* LIKE */}
                <div className="flex flex-row items-center justify-center gap-2 text-gray-500">

                  <button
                    onClick={() => handleLike(blog.id)}
                    className={`text-lg transition-all duration-300 hover:text-gray-800 ${likesState[blog.id]?.liked
                      ? "text-blue-600"
                      : "text-gray-400 dark:text-gray-200"
                      }`}
                  >
                    {
                      likesState[blog.id]?.liked ? (
                        <ThumbsUp className="text-blue-600 fill-blue-600" />
                      ) : (
                        <ThumbsUp />
                      )
                    }
                  </button>

                  <span className="text-sm dark:text-gray-200">
                    {likesState[blog.id]?.count || 0}
                  </span>

                </div>


                {/* UnLIKE */}
                <div className="flex flex-row items-center justify-center gap-2 text-gray-500">
                  <button
                    onClick={() => handleUnLike(blog.id)}
                    className={`text-lg transition-all duration-300 hover:text-gray-800 ${unLikesState[blog.id]?.unLiked
                      ? "text-blue-600"
                      : "text-gray-400 dark:text-gray-200"
                      }`}
                  >
                    {
                      unLikesState[blog.id]?.unLiked ? (
                        <ThumbsDown className="text-blue-600 fill-blue-600" />
                      ) : (
                        <ThumbsDown />
                      )
                    }
                  </button>

                  <span className="text-sm dark:text-gray-200">
                    {unLikesState[blog.id]?.count || 0}
                  </span>

                </div>

                {/* LOVE */}
                <div className="flex flex-row items-center justify-center gap-2 text-gray-500">

                  <button
                    onClick={() => handleWish(blog.id)}
                    className={`text-lg transition-all duration-300 hover:text-gray-800 ${wishState[blog.id]?.wished
                      ? "text-red-600"
                      : "text-gray-400 dark:text-gray-200"
                      }`}
                  >
                    {
                      wishState[blog.id]?.wished ? (
                        <FaHeart className="text-red-600 fill-red-600" />
                      ) : (
                        <FaRegHeart />
                      )
                    }
                  </button>

                  <span className="text-sm dark:text-gray-200">
                    {wishState[blog.id]?.count || 0}
                  </span>

                </div>

                <div className="flex flex-row items-center justify-center gap-2 text-gray-500">
                  <button
                    onClick={() => setOpenComment(blog.id)}
                    className="text-lg transition-all duration-300 hover:text-blue-600 dark:text-gray-200"
                  >
                    <MessageCircle />
                  </button>

                  <span className="text-sm dark:text-gray-200">
                    {comments[blog.id]?.length || 0}
                  </span>
                </div>

                {/* followed */}
                <div className="flex flex-row items-center justify-center gap-2 text-gray-500">
                  <button
                    onClick={() => handleFollow(blog.id)}
                    className={`text-lg transition-all duration-300 hover:text-gray-800 ${followState[blog.id]?.followed
                      ? "text-blue-600"
                      : "text-gray-400 dark:text-gray-200"
                      }`}
                  >
                    {
                      followState[blog.id]?.followed ? (
                        <Users className="text-blue-600 fill-blue-600" />
                      ) : (
                        <Users />
                      )
                    }
                  </button>

                  <span className="text-sm dark:text-gray-200">
                    {followState[blog.id]?.count || 0}
                  </span>

                </div>

                <div className="flex flex-row items-center justify-center gap-2 text-gray-500">
                  <button
                    onClick={() => handleShare(blog)}
                    className="text-lg dark:text-gray-200 transition-all duration-300 hover:text-blue-600"
                  >
                    <Share2 />
                  </button>
                  <span className="text-sm dark:text-gray-200">
                    {shareState[blog.id] || 0}
                  </span>
                </div>


              </div>

              {/* RIGHT */}
              <div className={'flex flex-row items-center justify-center gap-4'}>

                <div className={'flex flex-row items-center justify-center text-sm gap-2'}>
                  <button
                    onClick={() => handleSubscription(blog.id)}
                    className={`flex flex-row items-center justify-center gap-1 border border-gray-300 py-1.5 px-2 text-black rounded-full
                   ${subscribeState[blog.id]?.subscribed ? "bg-black text-white dark:bg-slate-800 dark:border dark:border-slate-700" : "text-gray-600 bg-white dark:text-slate-800"}
                   `}>
                    {
                      subscribeState[blog.id]?.subscribed ? (
                        <span className="flex flex-row items-center justify-center gap-2">
                          <span><FaUserPlus /></span>
                          <span>{t('Subscribed')}</span>
                        </span>
                      ) : (
                        <span className="flex flex-row items-center justify-center gap-2">
                          <span><FaUserPlus /></span>
                          <span>{t('Subscribe')}</span>
                        </span>
                      )
                    }

                  </button>
                  <span className={'text-gray-500 dark:text-gray-200'}>{subscribeState[blog.id]?.count || 0}</span>
                </div>


                <div className={'flex flex-row items-center justify-center text-sm gap-2'}>
                  <button
                    onClick={() => handleViews(blog.id)}
                    className={`flex flex-row items-center justify-center gap-1 border border-gray-300 py-1 px-2 text-black rounded-full
                   ${viewState[blog.id]?.viewed ? "bg-black text-white dark:text-gray-200 dark:bg-slate-800 dark:border-slate-700" : "text-gray-600 bg-white"}
                   `}>
                    {
                      viewState[blog.id]?.viewed ? (
                        <span className="flex flex-row items-center justify-center gap-2">
                          <span><Eye /></span>
                          <span>{t('Viewed')}</span>
                        </span>
                      ) : (
                        <span className="flex flex-row items-center justify-center gap-2">
                          <span><Eye /></span>
                          <span>{t("View")}</span>
                        </span>
                      )
                    }

                  </button>
                  <span className={'text-gray-500 dark:text-gray-200'}>{viewState[blog.id]?.count || 0}</span>
                </div>

                <button
                  onClick={() => handleNotification(blog.id)}
                  className={
                    notificationState[blog.id]?.notified
                      ? "text-blue-600"
                      : "text-gray-600 dark:text-gray-200"
                  }
                >
                  <FaBell />
                </button>

              </div>

            </div>

          </div>



        ))}

      </div>

      {
        openComment && (
          <CommentPopUp
            openComment={openComment}
            setOpenComment={setOpenComment}
            blog={blogs.find(b => b.id === openComment)}
            comments={comments}
            commentText={commentText}
            setCommentText={setCommentText}
            handleComment={handleComment}
          />
        )
      }

      {openImage && (
        <ImagePopup
          blogImage={openImage}
          onClose={() => setOpenImage(null)}
        />
      )}
    </>
  )
}

export default BlogPost