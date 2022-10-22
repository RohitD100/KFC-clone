import React from "react";
import Card from 'react-bootstrap/Card'

const Home = () => {
    return (
        <div style={{ textAlign: 'center', paddingBottom: "20px" }}>
            <br />
            <br />

            <img style={{ width: '100%' }} src="https://images.ctfassets.net/wtodlh47qxpt/4gztBB8yAvtp6jV7JAuLD/093fddbb77a78a44a4d3d5e066c592de/KFC_Peri_Peri_Banner__1440x396px.jpg?w=1464&fit=fill&fm=webp" class="img-fluid" alt="" />
            <img style={{ width: '100%' }} src="https://images.ctfassets.net/h81st780aesh/syFnPmvx5dM9ztEB0P3uq/e852b036445eabfb5e9cc21870732254/72582Federalist_Pig_Best.png?fm=webp&w=1219&fit=fill&f=center&q=50" class="img-fluid" alt="" />
            <img style={{ width: '100%' }} src="https://images.getbento.com/accounts/9369d1608733cc0f8c8c822b7fee921c/media/images/48371home-banner-1.jpg?w=1800&fit=max&auto=compress,format" class="img-fluid" alt="" />

            <br />
            <br />

            <div style={{ width: "100%" }} className="row d-flex justify-content-center align-items-center">
                <Card style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                    <Card.Img variant="top" src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp" style={{ height: "16rem" }} className="mt-3" />
                    <Card.Body>
                        <Card.Title>Massala Theoryy</Card.Title>
                        <Card.Text>
                            Price : ₹ 350
                        </Card.Text>
                    </Card.Body>
                </Card>
                {/* 2nd card  */}
                <Card style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                    <Card.Img variant="top" src="https://b.zmtcdn.com/data/pictures/chains/5/19295245/089cbcf1d3307542c72f77272556b28b_o2_featured_v2.jpg?output-format=webp" style={{ height: "16rem" }} className="mt-3" />
                    <Card.Body>
                        <Card.Title>Jugaadi Adda</Card.Title>
                        <Card.Text>
                            Price : ₹ 25
                        </Card.Text>
                    </Card.Body>
                </Card>
                {/* 3rd card */}
                <Card style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                    <Card.Img variant="top" src="https://b.zmtcdn.com/data/pictures/chains/1/19708611/10f90d4a69678d98662514d173b29665_o2_featured_v2.jpg" style={{ height: "16rem" }} className="mt-3" />
                    <Card.Body>
                        <Card.Title>La Milano Pizzeria</Card.Title>
                        <Card.Text>
                            Price : ₹ 70
                        </Card.Text>
                    </Card.Body>
                </Card>
                {/* 4th card */}
                <Card style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                    <Card.Img variant="top" src="https://b.zmtcdn.com/data/pictures/chains/1/113401/59f29399060caefcc575d59dc9402ce8_o2_featured_v2.jpg" style={{ height: "16rem" }} className="mt-3" />
                    <Card.Body>
                        <Card.Title>Momoman</Card.Title>
                        <Card.Text>
                            Price : ₹ 70
                        </Card.Text>
                    </Card.Body>
                </Card>
                {/* 5th card  */}
                <Card style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                    <Card.Img variant="top" src="https://b.zmtcdn.com/data/pictures/chains/5/110225/3978e28854b7496dbef9496546734811_o2_featured_v2.jpg" style={{ height: "16rem" }} className="mt-3" />
                    <Card.Body>
                        <Card.Title>Jassi De Parathe</Card.Title>
                        <Card.Text>
                            Price : ₹ 210
                        </Card.Text>
                    </Card.Body>
                </Card>
                {/* 6th card  */}
                <Card style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                    <Card.Img variant="top" src="https://b.zmtcdn.com/data/pictures/5/113895/3c06f6fbb8f667a2537dfdb6f060dc8b_o2_featured_v2.jpg" style={{ height: "16rem" }} className="mt-3" />
                    <Card.Body>
                        <Card.Title>Anjoy Latenight Meals</Card.Title>
                        <Card.Text>
                            Price : ₹ 100
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Home