// Image 최적화를 위해서는 하기와 같이 import 필요
// import Image from 'next/image'
// import food0 from '/public/food0.png'

export default function List() {
  let 상품들 = ['Tomatoes', 'Pasta', 'Coconut']
  let 상품가격 = ['10', '20', '30']
  return (
    <div>
      <h2 className='title-sub'>상품목록</h2>
      {
        상품들.map((a, i) => {
          return (
            <div className="food" key={i}>
              {/* 외부이미지 가져올때는 width,heigt 지정필오 && next.config.js 경로지정 */}
              {/* <Image src={food0} className='food-img'></Image> */}
              {/* <img src={'/food'+i+'.png'} className='food-img'></img> */}
              <img src={`/food${i}.png`} className='food-img'></img>
              <h4>{a} ${상품가격[i]}</h4>
            </div>
          )
        })
      }
    </div>
  )
}


