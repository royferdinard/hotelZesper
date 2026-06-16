import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import BlogFilter from './blogFilter'
import BlogPost from './blogPost'
import BlogsData from './blogPostStore'
import { AlertTriangle } from 'lucide-react'

function BlogContent() {

  const { t } = useTranslation();

  const [activeCategory, setActiveCategory] = useState('')
  const [category, setCategory] = useState("All")
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')
  const [activeSort, setActiveSort] = useState('')

  const filterBlog = BlogsData.filter((blog) => {
    const matchBlog = category === "All" ? true : blog.category === category;

    const matchSearch =
      blog.title.trim().toLowerCase().includes(search.toLowerCase()) ||
      blog.author.trim().toLowerCase().includes(search.toLowerCase()) ||
      blog.category.trim().toLowerCase().includes(search.toLowerCase()) ||
      blog.fullDescription.trim().toLowerCase().includes(search.toLowerCase()) ||
      blog.shortDescription.trim().toLowerCase().includes(search.toLowerCase()) ||
      blog.date.trim().toLowerCase().includes(search.toLowerCase())

    return matchBlog && matchSearch;
  }).sort((a, b) => {
    switch (sort) {
      case "Newest First":
        return b.id - a.id;

      case "Oldest First":
        return a.id - b.id;

      case "A-Z":
        return a.title.localeCompare(b.title);

      case "Z-A":
        return b.title.localeCompare(a.title);

      case "Most Popular":
        return b.views - a.views;

      case "High-Low Subscription":
        return b.subscriptions - a.subscriptions;

      case "High-Low Likes":
        return b.likes - a.likes;

      case "High-Low Followers":
        return b.followers - a.followers;

      default:
        return 0;
    }
  });

  const handleFilter = (cat) => {
    setCategory(cat);
    setActiveCategory(cat);
  }

  const handleSort = (sortType) => {
    setSort(sortType);
    setActiveSort(sortType);
  };

  return (
    <>
      <div className="py-8 px-4 flex flex-col md:flex-row gap-6 items-start dark:bg-gray-900 transition-colors duration-300">

        {/* Sticky Blog Filter */}
        <div className="w-full md:w-70 md:sticky md:top-24 self-start">
          <BlogFilter
            filter={handleFilter}
            search={search}
            setSearch={setSearch}
            setSort={handleSort}
            activeFilter={activeCategory}
            activeSort={activeSort}
          />
        </div>

        {/* Blog Posts */}
        <div className="flex-1 min-w-0">

          {
            filterBlog.length > 0 ? (
              <BlogPost blogs={filterBlog} />
            ) : (
              <div className="w-full min-h-[280px] flex flex-col items-center justify-center bg-transparent dark:bg-gray-800 rounded-md shadow-none border-none border-gray-200 dark:border-gray-700 p-8 transition-all duration-300">

                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 dark:bg-blue-500 mb-4 animate-bounce transition-all duration-300">
                  <span className="text-white">
                    <AlertTriangle size={32} />
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-200 text-center">
                  {t(" No Results Found")}
                </h2>

                <p className="text-gray-500 dark:text-gray-400 mt-3 text-center w-full leading-relaxed">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">
                    {t(category)}
                  </span>{" "}
                  {t(" currently has no matching blog posts. Please try another category or search keyword.")}
                </p>

              </div>
            )
          }

        </div>

      </div>
    </>
  )
}

export default BlogContent