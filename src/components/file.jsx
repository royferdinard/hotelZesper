{/* NEWSLETTER */}
<div className="flex justify-center mt-10">
  <div className="bg-white text-black w-full md:w-[70%] p-5 rounded-md shadow-lg">

    <h1 className="text-2xl font-bold">
      {t("Subscribe to our")} <span className="text-blue-900">{t("Newsletter")}</span>
    </h1>

    <p className="text-gray-600 mt-1">
      {t("Get hotel updates, offers, events, and exclusive deals.")}
    </p>

    <div className="flex mt-3 h-11">
      <input
        type="email"
        placeholder={t("Enter email address")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-[70%] px-3 outline-none bg-gray-100"
      />

      <button
        onClick={handleSubscribe}
        disabled={loading}
        className="w-[30%] bg-blue-900 text-white hover:bg-blue-700"
      >
        {loading ? "..." : t("Subscribe")}
      </button>
    </div>

    {message && (
      <p
        className={`text-sm mt-2 ${
          message.type === "error"
            ? "text-red-500"
            : "text-green-600"
        }`}
      >
        {t(message.text)}
      </p>
    )}

  </div>
</div>