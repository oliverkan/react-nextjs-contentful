import React from "react";
import Link from 'next/link'
import Image from 'next/image'
export default function ProductThumbnail({product}) {
    const { productName, price, image } = product.fields
    return (
        <React.Fragment>
            <div className="card">
                <div className="featured">
                    {<Image
                        src={'https:' + image[0].fields.file.url}
                        width={image[0].fields.file.details.image.width}
                        height={image[0].fields.file.details.image.height}
                    />}
                </div>
                <div className="content">
                    <div className="info">
                        <h4>{ productName }</h4>
                    </div>
                    <div className="actions">
                        <Link href={'/recipes/' + 'slug'}><a>Cook this</a></Link>
                    </div>
                </div>

                <style jsx>{`
        .card {
          transform: rotateZ(0deg);
        }
        .content {
          background: #fff;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          margin: 0;
          position: relative;
          top: -40px;
          left: -10px;
        }
        .info {
          padding: 16px;
        }
        .info h4 {
          margin: 4px 0;
          text-transform: uppercase;
        }
        .info p {
          margin: 0;
          color: #777;
        }
        .actions {
          margin-top: 20px;
          display: flex;
          justify-content: flex-end;
        }
        .actions a {
          color: #fff;
          background: #f01b29;
          padding: 16px 24px;
          text-decoration: none;
        }
      `}</style>
            </div>
        </React.Fragment>
    )
}