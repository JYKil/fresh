import Image from 'next/image'

export default function List() {
  let productList = ['Tomatoes', 'Pasta', 'Coconut']
  return (
    <div>
      <h2 className='title-sub'>상품목록</h2>
      {
        productList.map((a) => {
          return (
            <div className="food">
              <h4>{a} $40</h4>
            </div>)
        })
      }
    </div>
  )
}


