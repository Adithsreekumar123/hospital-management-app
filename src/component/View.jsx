import React, { useState } from 'react'
import SubHeader from './SubHeader'


const View = () => {
    const [data, changeData] = useState(
        [
            { "Subscriber": "Suresh", "imglink": "https://media.istockphoto.com/id/1370095638/photo/doctor-check-and-diagnose-the-human-spine-on-blurred-background.jpg?s=612x612&w=0&k=20&c=OiJ-9mSOI-lr2iHJ2g4FwVL_403ZJioR50Ti_88G_p4=" },
            { "Subscriber": "Anil", "imglink": "https://southdenver.com/wp-content/uploads/2021/09/invasive-cardiology.jpg" },
            { "Subscriber": "John", "imglink": "https://www.ogstulsa.com/wp-content/uploads/2024/02/gynecologist-1.jpg" },
            { "Subscriber": "Paul", "imglink": "https://d1zejd6fk5zfu2.cloudfront.net/sites/neurology/files/styles/large/public/images/2019-05/shutterstock_719796733_brain.jpg?itok=v1mbAZzv" },
            { "Subscriber": "Treesa", "imglink": "https://drjathinsveincenter.com/wp-content/uploads/2022/03/What-Is-Interventional-Radiology-And-How-Does-It-Work-1.jpg" },
            { "Subscriber": "Maya", "imglink": "https://www.meitra.com/public/upload_file/631078e84cea61662023912.jpg" },
            { "Subscriber": "Neya", "imglink": "https://bouve.northeastern.edu/wp-content/uploads/2024/01/What-Is-Applied-Psychology-Hero-Image.jpg" },
            { "Subscriber": "Gwen", "imglink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJ69gUrJgJ3LEmMZmWUprFxulVmT5OohLoA&s" },
            { "Subscriber": "Anoop", "imglink": "https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=9vuq6HxeSZfhZ7Jit_2HPVLyoajffb7h_SbWssh_bME=" },
            { "Subscriber": "Vikram", "imglink": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Guy_Pearce_Cannes_2012_%28revised%29.jpg" },
           


        ]
    )
    return (
        <div>
            <SubHeader />
            <div class="container">
                <div class="row">
                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col xxl-12">
                        <div class="row g-3">

                            {data.map(
                                (value, index) => {
                                    return <div class="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                        <div class="card">
                                            <img height="350" src={value.imglink}
                                                class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title"></h5>
                                                <p class="card-text"></p>
                                                <a href="#" class="btn btn-primary">{value.Subscriber}</a>
                                            </div>
                                        </div>

                                    </div>
                                }
                            )}







                        </div>


                    </div>


                </div>
            </div>

        </div>
    )
}

export default View