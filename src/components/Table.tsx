import React from "react";
import Card from "./Card";
import '../App.css';
import CardSpotify from "./CardSpotify";

const Table: React.FC = () => {
    return (
        <>
            <table>
                    <tr>
                        <th>Beat</th>
                        <th>Mix/Master</th>
                        <th>Beatmake + Mix/Master</th>
                    </tr>
                    <th>
                        <Card
                            src="iH3ldAWOZXI"
                            title="'DAMN' (Prod. HypeLost)"
                        />
                        
                        <Card
                            src="UpHwS4DLbYI"
                            title="'GROOVE' (Prod. HypeLost)"
                        />
                        <Card
                            src="NUTxmNzX6PM"
                            title="'23' (Prod. HypeLost)"
                        />
                        
                        <Card
                            src="SrOQxTw_YAs"
                            title="JovemPac - Drillzada (Prod. HypeLost)"
                        />
                        <Card
                            src="xN2OVUp9hqc"
                            title="Gu$set - Vô te falar (Prod. HypeLost)"
                        />
                        <Card
                            src="ASO5ycay_p8"
                            title="Guilherme Arenas - Onomatopeia"
                        />
                        
                    </th>
                    <th>
                        <Card
                            src="ejuYhkR3Pfw"
                            title="Maserati - Mc Dz"
                        />
                        <CardSpotify
                            src="https://open.spotify.com/embed/track/5t5NT1aSXt3zjRUy4iyLOe?utm_source=generator"
                            title="Pandora - Mc Dz" 
                        />
                        <Card
                            src="zirZV6qg1A4"
                            title="Pingente - Teaga"
                        />
                    </th>
                    <th>
                        <Card
                            src="YUeq9sMp1pU"
                            title="Barbxsa - Marola"
                        />
                        <Card
                            src="wjo7XjACTWo"
                            title="Barbxsa - Ocasiões"
                        />
                        <Card
                            src="Cr5k4_g3IUk"
                            title="Barbxsa - Mané"
                        />
                        <Card
                            src="IfLEGooQ32g"
                            title="Barbxsa - Os Menó Novim"
                        />
                        <Card
                            src="c_dFQ8-QD_U"
                            title="Barbxsa - Jet"
                        />
                        <Card
                            src="CGzVjEOYDRs"
                            title="Barbxsa - Mario Kart"
                        />
                    </th>
                    
            </table>
        </>
    )
}

export default Table;