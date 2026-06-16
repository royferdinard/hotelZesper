import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaTimes } from 'react-icons/fa'
import { MessageCircle } from 'lucide-react'

function CommentPopUp({
    openComment,
    setOpenComment,
    blog,
    comments,
    commentText,
    setCommentText,
    handleComment
}) {


      const { t, i18n } = useTranslation();


    const user =  JSON.parse(localStorage.getItem("currentUser")) || [];

    return (
    <>
        {openComment === blog.id && (
            <div className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4">

                <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 border border-slate-200 dark:border-slate-700">

                    {/* HEADER */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-slate-700">

                        <h2 className="font-bold text-xl text-slate-700 dark:text-white">
                            {t('Comments')}
                        </h2>

                        <button
                            onClick={() => setOpenComment(null)}
                            className="w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 transition-all"
                        >
                            <FaTimes />
                        </button>
                    </div>

                    {/* COMMENTS */}
                    <div className="h-[400px] overflow-y-auto p-4 flex flex-col gap-4 bg-gray-50 dark:bg-slate-800">

                        {comments[blog.id]?.length > 0 ? (
                            comments[blog.id].map((comment, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-slate-900 shadow-sm rounded-xl p-4 border border-gray-100 dark:border-slate-700"
                                >
                                    <div className="flex items-start gap-3">

                                        <div className="w-10 h-10 rounded-full uppercase bg-blue-600 text-white flex items-center justify-center font-bold">
                                            {user.userName?.charAt(0)}
                                        </div>

                                        <div>
                                            <h5 className="font-semibold text-slate-700 dark:text-white">
                                                {user.userName}
                                            </h5>

                                            <p className="text-gray-600 dark:text-slate-300 text-sm mt-1">
                                                {comment.text}
                                            </p>

                                            <span className="text-xs text-gray-400 dark:text-slate-500 mt-2 block">
                                                {comment.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-gray-400 dark:text-slate-500">
                                <MessageCircle size={40} />
                                <p>{t('No comments yet')}</p>
                            </div>
                        )}

                    </div>

                    {/* FOOTER INPUT */}
                    <div className="border-t border-gray-200 dark:border-slate-700 p-4 bg-white dark:bg-slate-900">

                        <div className="flex gap-3">

                            <input
                                value={commentText}
                                onChange={(e) =>
                                    setCommentText(e.target.value)
                                }
                                type="text"
                                placeholder={t("Write a comment...")}
                                className="flex-1 h-12 px-4 border border-gray-300 dark:border-slate-700 rounded-full outline-none focus:border-blue-500 bg-white dark:bg-slate-800 text-slate-700 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500"
                            />

                            <button
                                onClick={() =>
                                    handleComment(blog.id)
                                }
                                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 rounded-full font-semibold transition-all duration-300"
                            >
                                {t('Send')}
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        )}
    </>
);
}

export default CommentPopUp