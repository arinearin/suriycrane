import Link from "next/link"

export default function GallerySection() {
  const images = [
    "https://scontent.fkkc1-1.fna.fbcdn.net/v/t39.30808-6/495855655_1249002133892433_7888745481923683294_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XRTHK-j5byEQ7kNvwFL_B2s&_nc_oc=AdnQYBSK6yFxzLlchVOo2Xg18bE-RT0dVjl47pspXuns1o6Ldiwg8HygTxvEKPSSWDc&_nc_zt=23&_nc_ht=scontent.fkkc1-1.fna&_nc_gid=7h_BbQg4llWfDediVr_l9g&oh=00_AfLtdKYxRozH_oM6H8yQPP1ja3FZLssPeK49e5trWnhbEA&oe=683DF292",
    "https://scontent.fkkc1-1.fna.fbcdn.net/v/t39.30808-6/491053509_1222723386520308_5496104757210960109_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8xsKJ3IaUPkQ7kNvwFWwCDR&_nc_oc=AdmynWWtgdzfWpwSHdFgouQBwj8FBSa_jf6GM2vye-lg9Nq8U7vfhZWgzcwmFxj3AUw&_nc_zt=23&_nc_ht=scontent.fkkc1-1.fna&_nc_gid=Cnc0RXJE_8u2lb2HISfNYQ&oh=00_AfI9Ht2QG8orLTnNNfLqipDMJvsGwnOhxpp3IhpNNLf3Fw&oe=683DD9C2",
    "https://scontent.fkkc1-1.fna.fbcdn.net/v/t39.30808-6/490594499_1222571796535467_1076479358006272078_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pLmpO-UKEXsQ7kNvwHwxGd-&_nc_oc=AdmTl5BxX_sPMJfS3Kh05arK9x0bQlSgCstQW2s7_rsdH0SynBkbTNRK-YoFPgIJEHg&_nc_zt=23&_nc_ht=scontent.fkkc1-1.fna&_nc_gid=gVyWBQPA07GZsBj7scAjXg&oh=00_AfIcBZXhsztYqZSfbdFpzNXL7zM9pLlJRG4IdqkbIcxyGQ&oe=683DEA0A",
    "https://scontent.fkkc1-1.fna.fbcdn.net/v/t39.30808-6/491749457_1222572116535435_3975542219436416103_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6wK33Y6LmVQQ7kNvwFmOI7a&_nc_oc=Adk3qYLM7sJoT-2cwBGe3POCSQY89EgD8nZZWu0Oa74UZFjPaIcLU62zCCFGrXKMrHs&_nc_zt=23&_nc_ht=scontent.fkkc1-1.fna&_nc_gid=ifolg2lcBrM_QP5v2kel9Q&oh=00_AfIk3ZqvIXRdlhFbNpCxuyriy4mWmfuhAI1A6DFDp5p8nQ&oe=683DEED5",
    "https://scontent.fkkc1-1.fna.fbcdn.net/v/t39.30808-6/490735764_1222198089906171_7234961625852444724_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=UqgeNAf16FgQ7kNvwGiQzUC&_nc_oc=Admu0zh05m3-qGJ3TRlpHpbeFHMHN_8sfXMvWgb_s8Lv_0M_sQjBGj7EXYBxfzKkxQs&_nc_zt=23&_nc_ht=scontent.fkkc1-1.fna&_nc_gid=kbwkP811cC6y1HMz8TAwaA&oh=00_AfIjs_ycshs-nVRwnF1V6j5jLEKdHvYNuP32c-goDpKl9Q&oe=683DF2B9",
    "https://scontent.fkkc1-1.fna.fbcdn.net/v/t39.30808-6/489445231_1217453900380590_6329114610156717008_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Kq_MUPfnqF4Q7kNvwFPj-n6&_nc_oc=AdlSBuYu3Iq9EKAFIwdyGy1V2wjZX6PZOtOFUm3mTGZbXnQL7EgZB0sgFTTOyshDmb0&_nc_zt=23&_nc_ht=scontent.fkkc1-1.fna&_nc_gid=h8_ZGyMmsqyUBxFywHFJzg&oh=00_AfLfN-08yWjnFhjIngQURONB85Qu4rfFRxwh4jgEBWLt-Q&oe=683DE863",
    "https://scontent.fkkc1-1.fna.fbcdn.net/v/t39.30808-6/489053728_1215396670586313_8364670232429362019_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=uUBwND1m7koQ7kNvwELa_H7&_nc_oc=Adk4m9c_Yr2Nc4ZP9w-QKz0MwSuI2QZENQviiJqptGtZWrR7cT7RlFspXFewzc_at7I&_nc_zt=23&_nc_ht=scontent.fkkc1-1.fna&_nc_gid=xmMAsACekIgFeHlRgRMXsA&oh=00_AfLD4BN8Fo9BvjCQDmPFz1AbPUCAorw1ikGIiRccUh6vMA&oe=683DEB11",
    "https://scontent.fkkc1-1.fna.fbcdn.net/v/t39.30808-6/474390358_1151512130308101_3851337802604940543_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9DSorvuddMIQ7kNvwEAdmav&_nc_oc=AdlFUSD_aRTcSxaUPT2IvyH6SyxnA3DEEPPYUykAKFdITFW4FSARzhCLZE0DWgdsaKo&_nc_zt=23&_nc_ht=scontent.fkkc1-1.fna&_nc_gid=iOIWzIShsyWeecjaio3ssA&oh=00_AfIE17G2dU6AWg3DN7esO-NvSgYjg2vgzvBtfK5WlJn9ug&oe=683DDA6B",
    "https://scontent.fkkc1-1.fna.fbcdn.net/v/t39.30808-6/467015212_1100985831726278_2904505061770701806_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=n4IJv4evTFAQ7kNvwFw1ayD&_nc_oc=AdkoBWcHfVtiENfcSQvdMXMDoCmx3RBPoNNtSYp2eIjxMddEvXxE2egeFXb57dt5k2E&_nc_zt=23&_nc_ht=scontent.fkkc1-1.fna&_nc_gid=cTkh8L4UK21b-kxtjzWD7g&oh=00_AfJWKw3w-O6HJvIF-fuFVC0QYkTedhfyMhc8bAiSva2ZUw&oe=683E0560"
  ]

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-600">แกลเลอรี่</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <img 
                src={img} 
                alt={`Gallery Image ${index + 1}`} 
                className="w-full h-48 object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
        <Link href="https://www.facebook.com/profile.php?id=100063479736713&sk=photos">
        <div className="text-center mt-12">
            <p className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
              ดูรูปผลงานทั้งหมด
            </p>
        </div>
       </Link>
      </div>
    </section>
  )
}