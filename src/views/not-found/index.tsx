export default function NotFound() {
    return (
        <>
            <section className='banner'>
                <div className='banner-img'>
                    <img src='/images/banner/aboutUs-banner.jpg' />
                </div>
                <div className='page-title'>
                    <div className='container'>
                        <h1>Không tìm thấy nội dung</h1>
                    </div>
                </div>
            </section>
            <div className='page-404'>
                <div className='container'>
                    <div className='section-title'>
                        <h2>Không tìm thấy nội dung của trang yêu cầu!</h2>
                        <p>Opps Error</p>
                    </div>
                    <div className='page-img'>
                        <img src='/images/404Img.jpg' />
                    </div>
                </div>
            </div>
        </>
    )
}
