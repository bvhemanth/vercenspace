import { TestBed } from '@angular/core/testing';

import { SpacexService } from './spacex.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';


describe('SpacexService', () => {
  let service: SpacexService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SpacexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get all ', () => {
    const data =  [
      {
         "flight_number":81,
         "mission_name":"STP-2",
         "mission_id":[
            
         ],
         "launch_year":"2019",
         "launch_date_unix":1561433400,
         "launch_date_utc":"2019-06-25T03:30:00.000Z",
         "launch_date_local":"2019-06-24T23:30:00-04:00",
         "is_tentative":false,
         "tentative_max_precision":"hour",
         "tbd":false,
         "launch_window":14400,
         "rocket":{
            "rocket_id":"falconheavy",
            "rocket_name":"Falcon Heavy",
            "rocket_type":"FT",
            "first_stage":{
               "cores":[
                  {
                     "core_serial":"B1057",
                     "flight":1,
                     "block":5,
                     "gridfins":true,
                     "legs":true,
                     "reused":false,
                     "land_success":false,
                     "landing_intent":true,
                     "landing_type":"ASDS",
                     "landing_vehicle":"OCISLY"
                  },
                  {
                     "core_serial":"B1052",
                     "flight":2,
                     "block":5,
                     "gridfins":true,
                     "legs":true,
                     "reused":true,
                     "land_success":true,
                     "landing_intent":true,
                     "landing_type":"RTLS",
                     "landing_vehicle":"LZ-1"
                  },
                  {
                     "core_serial":"B1053",
                     "flight":2,
                     "block":5,
                     "gridfins":true,
                     "legs":true,
                     "reused":true,
                     "land_success":true,
                     "landing_intent":true,
                     "landing_type":"RTLS",
                     "landing_vehicle":"LZ-2"
                  }
               ]
            },
            "second_stage":{
               "block":5,
               "payloads":[
                  {
                     "payload_id":"DSX",
                     "norad_id":[
                        44344
                     ],
                     "reused":false,
                     "customers":[
                        "USAF"
                     ],
                     "nationality":"United States",
                     "manufacturer":"Sierra Nevada Corporation",
                     "payload_type":"Satellite",
                     "payload_mass_kg":600,
                     "payload_mass_lbs":1322.77,
                     "orbit":"MEO",
                     "orbit_params":{
                        "reference_system":"geocentric",
                        "regime":"medium-earth",
                        "longitude":null,
                        "semi_major_axis_km":15397.815,
                        "eccentricity":0.197361,
                        "periapsis_km":5980.752,
                        "apoapsis_km":12058.608,
                        "inclination_deg":42.3314,
                        "period_min":316.919,
                        "lifespan_years":null,
                        "epoch":"2020-12-20T07:24:11.000Z",
                        "mean_motion":4.54374644,
                        "raan":4.5747,
                        "arg_of_pericenter":233.9128,
                        "mean_anomaly":106.2018
                     }
                  },
                  {
                     "payload_id":"COSMIC-2",
                     "norad_id":[
                        
                     ],
                     "reused":false,
                     "customers":[
                        "NOAA",
                        "NASA",
                        "Taiwan"
                     ],
                     "nationality":"United States",
                     "manufacturer":"National Space Organization",
                     "payload_type":"Satellite",
                     "payload_mass_kg":1668,
                     "payload_mass_lbs":3677.3,
                     "orbit":"LEO",
                     "orbit_params":{
                        "reference_system":"geocentric",
                        "regime":"low-earth",
                        "longitude":null,
                        "semi_major_axis_km":null,
                        "eccentricity":null,
                        "periapsis_km":null,
                        "apoapsis_km":null,
                        "inclination_deg":null,
                        "period_min":null,
                        "lifespan_years":null,
                        "epoch":null,
                        "mean_motion":null,
                        "raan":null,
                        "arg_of_pericenter":null,
                        "mean_anomaly":null
                     }
                  },
                  {
                     "payload_id":"GPIM",
                     "norad_id":[
                        
                     ],
                     "reused":false,
                     "customers":[
                        "NASA"
                     ],
                     "nationality":"United States",
                     "manufacturer":"Ball Aerospace & Technologies Corp",
                     "payload_type":"Satellite",
                     "payload_mass_kg":180,
                     "payload_mass_lbs":396,
                     "orbit":"LEO",
                     "orbit_params":{
                        "reference_system":"geocentric",
                        "regime":"low-earth",
                        "longitude":null,
                        "semi_major_axis_km":null,
                        "eccentricity":null,
                        "periapsis_km":null,
                        "apoapsis_km":null,
                        "inclination_deg":null,
                        "period_min":null,
                        "lifespan_years":null,
                        "epoch":null,
                        "mean_motion":null,
                        "raan":null,
                        "arg_of_pericenter":null,
                        "mean_anomaly":null
                     }
                  },
                  {
                     "payload_id":"Oculus-ASR",
                     "norad_id":[
                        44356
                     ],
                     "reused":false,
                     "customers":[
                        "Michigan Tech"
                     ],
                     "nationality":"United States",
                     "manufacturer":"Michigan Tech",
                     "payload_type":"Satellite",
                     "payload_mass_kg":70,
                     "payload_mass_lbs":154,
                     "orbit":"LEO",
                     "orbit_params":{
                        "reference_system":"geocentric",
                        "regime":"low-earth",
                        "longitude":null,
                        "semi_major_axis_km":6765.229,
                        "eccentricity":0.0159811,
                        "periapsis_km":278.978,
                        "apoapsis_km":495.21,
                        "inclination_deg":28.5106,
                        "period_min":92.296,
                        "lifespan_years":null,
                        "epoch":"2020-12-21T11:10:10.000Z",
                        "mean_motion":15.60195301,
                        "raan":126.5152,
                        "arg_of_pericenter":322.4101,
                        "mean_anomaly":36.5424
                     }
                  },
                  {
                     "payload_id":"OTB 1",
                     "norad_id":[
                        44341
                     ],
                     "reused":false,
                     "customers":[
                        "General Atomics"
                     ],
                     "nationality":"United States",
                     "manufacturer":"Surrey Satellite Technology-US LLC",
                     "payload_type":"Satellite",
                     "payload_mass_kg":138,
                     "payload_mass_lbs":304,
                     "orbit":"LEO",
                     "orbit_params":{
                        "reference_system":"geocentric",
                        "regime":"low-earth",
                        "longitude":null,
                        "semi_major_axis_km":7094.381,
                        "eccentricity":0.001201,
                        "periapsis_km":707.725,
                        "apoapsis_km":724.766,
                        "inclination_deg":23.9995,
                        "period_min":99.113,
                        "lifespan_years":null,
                        "epoch":"2020-12-21T01:51:06.000Z",
                        "mean_motion":14.52884118,
                        "raan":17.5452,
                        "arg_of_pericenter":27.274,
                        "mean_anomaly":332.838
                     }
                  },
                  {
                     "payload_id":"NPSAT 1",
                     "norad_id":[
                        44340
                     ],
                     "reused":false,
                     "customers":[
                        "Naval Postgrad School"
                     ],
                     "nationality":"United States",
                     "manufacturer":"Naval Postgrad School",
                     "payload_type":"Satellite",
                     "payload_mass_kg":86,
                     "payload_mass_lbs":189,
                     "orbit":"LEO",
                     "orbit_params":{
                        "reference_system":"geocentric",
                        "regime":"low-earth",
                        "longitude":null,
                        "semi_major_axis_km":7094.696,
                        "eccentricity":0.001162,
                        "periapsis_km":708.317,
                        "apoapsis_km":724.805,
                        "inclination_deg":24.0023,
                        "period_min":99.119,
                        "lifespan_years":null,
                        "epoch":"2020-12-20T18:24:35.000Z",
                        "mean_motion":14.52787269,
                        "raan":20.058,
                        "arg_of_pericenter":22.8733,
                        "mean_anomaly":337.2274
                     }
                  },
                  {
                     "payload_id":"Prox-1",
                     "norad_id":[
                        44339
                     ],
                     "reused":false,
                     "customers":[
                        "Georgia Tech"
                     ],
                     "nationality":"United States",
                     "manufacturer":"Georgia Tech",
                     "payload_type":"Satellite",
                     "payload_mass_kg":71,
                     "payload_mass_lbs":156,
                     "orbit":"LEO",
                     "orbit_params":{
                        "reference_system":"geocentric",
                        "regime":"low-earth",
                        "longitude":null,
                        "semi_major_axis_km":7093.074,
                        "eccentricity":0.0011639,
                        "periapsis_km":706.683,
                        "apoapsis_km":723.195,
                        "inclination_deg":24.0016,
                        "period_min":99.085,
                        "lifespan_years":null,
                        "epoch":"2020-12-21T03:05:37.000Z",
                        "mean_motion":14.53285615,
                        "raan":17.0481,
                        "arg_of_pericenter":35.2269,
                        "mean_anomaly":324.899
                     }
                  },
                  {
                     "payload_id":"LightSail-B",
                     "norad_id":[
                        44339
                     ],
                     "reused":false,
                     "customers":[
                        "Planetary Society"
                     ],
                     "nationality":"United States",
                     "manufacturer":"Planetary Society",
                     "payload_type":"Satellite",
                     "payload_mass_kg":5,
                     "payload_mass_lbs":11,
                     "orbit":"LEO",
                     "orbit_params":{
                        "reference_system":"geocentric",
                        "regime":"low-earth",
                        "longitude":null,
                        "semi_major_axis_km":null,
                        "eccentricity":null,
                        "periapsis_km":null,
                        "apoapsis_km":null,
                        "inclination_deg":null,
                        "period_min":null,
                        "lifespan_years":null,
                        "epoch":null,
                        "mean_motion":null,
                        "raan":null,
                        "arg_of_pericenter":null,
                        "mean_anomaly":null
                     }
                  },
                  {
                     "payload_id":"ARMADILLO",
                     "norad_id":[
                        
                     ],
                     "reused":false,
                     "customers":[
                        "University of Texas"
                     ],
                     "nationality":"United States",
                     "manufacturer":"University of Texas",
                     "payload_type":"Satellite",
                     "payload_mass_kg":4,
                     "payload_mass_lbs":8.8,
                     "orbit":"LEO",
                     "orbit_params":{
                        "reference_system":"geocentric",
                        "regime":"low-earth",
                        "longitude":null,
                        "semi_major_axis_km":null,
                        "eccentricity":null,
                        "periapsis_km":null,
                        "apoapsis_km":null,
                        "inclination_deg":null,
                        "period_min":null,
                        "lifespan_years":null,
                        "epoch":null,
                        "mean_motion":null,
                        "raan":null,
                        "arg_of_pericenter":null,
                        "mean_anomaly":null
                     }
                  },
                  {
                     "payload_id":"FalconSat 7",
                     "norad_id":[
                        
                     ],
                     "reused":false,
                     "customers":[
                        "USAF Academy"
                     ],
                     "nationality":"United States",
                     "manufacturer":"USAF Academy",
                     "payload_type":"Satellite",
                     "payload_mass_kg":5,
                     "payload_mass_lbs":11,
                     "orbit":"LEO",
                     "orbit_params":{
                        "reference_system":"geocentric",
                        "regime":"low-earth",
                        "longitude":null,
                        "semi_major_axis_km":null,
                        "eccentricity":null,
                        "periapsis_km":null,
                        "apoapsis_km":null,
                        "inclination_deg":null,
                        "period_min":null,
                        "lifespan_years":null,
                        "epoch":null,
                        "mean_motion":null,
                        "raan":null,
                        "arg_of_pericenter":null,
                        "mean_anomaly":null
                     }
                  },
                  {
                     "payload_id":"E-TBEx A & B",
                     "norad_id":[
                        
                     ],
                     "reused":false,
                     "customers":[
                        "SRI International"
                     ],
                     "nationality":"United States",
                     "manufacturer":"SRI International",
                     "payload_type":"Satellite",
                     "payload_mass_kg":4,
                     "payload_mass_lbs":8.8,
                     "orbit":"LEO",
                     "orbit_params":{
                        "reference_system":"geocentric",
                        "regime":"low-earth",
                        "longitude":null,
                        "semi_major_axis_km":null,
                        "eccentricity":null,
                        "periapsis_km":null,
                        "apoapsis_km":null,
                        "inclination_deg":null,
                        "period_min":null,
                        "lifespan_years":null,
                        "epoch":null,
                        "mean_motion":null,
                        "raan":null,
                        "arg_of_pericenter":null,
                        "mean_anomaly":null
                     }
                  },
                  {
                     "payload_id":"PSat 2",
                     "norad_id":[
                        44357
                     ],
                     "reused":false,
                     "customers":[
                        "US Naval Academy"
                     ],
                     "nationality":"United States",
                     "manufacturer":"US Naval Academy",
                     "payload_type":"Satellite",
                     "payload_mass_kg":2,
                     "payload_mass_lbs":4.4,
                     "orbit":"LEO",
                     "orbit_params":{
                        "reference_system":"geocentric",
                        "regime":"low-earth",
                        "longitude":null,
                        "semi_major_axis_km":6918.865,
                        "eccentricity":0.0346569,
                        "periapsis_km":300.944,
                        "apoapsis_km":780.517,
                        "inclination_deg":28.5246,
                        "period_min":95.457,
                        "lifespan_years":null,
                        "epoch":"2020-12-20T19:17:27.000Z",
                        "mean_motion":15.08517649,
                        "raan":231.9102,
                        "arg_of_pericenter":149.2153,
                        "mean_anomaly":212.9258
                     }
                  },
                  {
                     "payload_id":"BRICSat 2",
                     "norad_id":[
                        
                     ],
                     "reused":false,
                     "customers":[
                        "US Naval Academy"
                     ],
                     "nationality":"United States",
                     "manufacturer":"US Naval Academy",
                     "payload_type":"Satellite",
                     "payload_mass_kg":1,
                     "payload_mass_lbs":2.2,
                     "orbit":"LEO",
                     "orbit_params":{
                        "reference_system":"geocentric",
                        "regime":"low-earth",
                        "longitude":null,
                        "semi_major_axis_km":null,
                        "eccentricity":null,
                        "periapsis_km":null,
                        "apoapsis_km":null,
                        "inclination_deg":null,
                        "period_min":null,
                        "lifespan_years":null,
                        "epoch":null,
                        "mean_motion":null,
                        "raan":null,
                        "arg_of_pericenter":null,
                        "mean_anomaly":null
                     }
                  },
                  {
                     "payload_id":"TEPCE 1 & 2",
                     "norad_id":[
                        
                     ],
                     "reused":false,
                     "customers":[
                        "Naval Research Lab"
                     ],
                     "nationality":"United States",
                     "manufacturer":"Naval Research Lab",
                     "payload_type":"Satellite",
                     "payload_mass_kg":1.5,
                     "payload_mass_lbs":3.3,
                     "orbit":"LEO",
                     "orbit_params":{
                        "reference_system":"geocentric",
                        "regime":"low-earth",
                        "longitude":null,
                        "semi_major_axis_km":null,
                        "eccentricity":null,
                        "periapsis_km":null,
                        "apoapsis_km":null,
                        "inclination_deg":null,
                        "period_min":null,
                        "lifespan_years":null,
                        "epoch":null,
                        "mean_motion":null,
                        "raan":null,
                        "arg_of_pericenter":null,
                        "mean_anomaly":null
                     }
                  },
                  {
                     "payload_id":"CP9",
                     "norad_id":[
                        
                     ],
                     "reused":false,
                     "customers":[
                        "Cal Poly"
                     ],
                     "nationality":"United States",
                     "manufacturer":"Cal Poly",
                     "payload_type":"Satellite",
                     "payload_mass_kg":1.5,
                     "payload_mass_lbs":3.3,
                     "orbit":"LEO",
                     "orbit_params":{
                        "reference_system":"geocentric",
                        "regime":"low-earth",
                        "longitude":null,
                        "semi_major_axis_km":null,
                        "eccentricity":null,
                        "periapsis_km":null,
                        "apoapsis_km":null,
                        "inclination_deg":null,
                        "period_min":null,
                        "lifespan_years":null,
                        "epoch":null,
                        "mean_motion":null,
                        "raan":null,
                        "arg_of_pericenter":null,
                        "mean_anomaly":null
                     }
                  },
                  {
                     "payload_id":"StangSat",
                     "norad_id":[
                        
                     ],
                     "reused":false,
                     "customers":[
                        "Merrit Island HS"
                     ],
                     "nationality":"United States",
                     "manufacturer":"Merrit Island HS",
                     "payload_type":"Satellite",
                     "payload_mass_kg":1,
                     "payload_mass_lbs":2.2,
                     "orbit":"LEO",
                     "orbit_params":{
                        "reference_system":"geocentric",
                        "regime":"low-earth",
                        "longitude":null,
                        "semi_major_axis_km":null,
                        "eccentricity":null,
                        "periapsis_km":null,
                        "apoapsis_km":null,
                        "inclination_deg":null,
                        "period_min":null,
                        "lifespan_years":null,
                        "epoch":null,
                        "mean_motion":null,
                        "raan":null,
                        "arg_of_pericenter":null,
                        "mean_anomaly":null
                     }
                  }
               ]
            },
            "fairings":{
               "reused":false,
               "recovery_attempt":true,
               "recovered":true,
               "ship":"GOMSTREE"
            }
         },
         "ships":[
            "OCISLY",
            "GOQUEST",
            "GONAVIGATOR",
            "GOMSTREE",
            "HOLLYWOOD"
         ],
         "telemetry":{
            "flight_club":null
         },
         "launch_site":{
            "site_id":"ksc_lc_39a",
            "site_name":"KSC LC 39A",
            "site_name_long":"Kennedy Space Center Historic Launch Complex 39A"
         },
         "launch_success":true,
         "links":{
            "mission_patch":"https://images2.imgbox.com/18/17/gCjLjHbl_o.png",
            "mission_patch_small":"https://images2.imgbox.com/b0/23/BvwaqoS0_o.png",
            "reddit_campaign":"https://www.reddit.com/r/spacex/comments/bw6aa8/stp2_launch_campaign_thread/",
            "reddit_launch":"https://www.reddit.com/r/spacex/comments/c40a29/rspacex_stp2_official_launch_discussion_updates",
            "reddit_recovery":null,
            "reddit_media":"https://www.reddit.com/r/spacex/comments/c4ng3a/rspacex_stp2_media_thread_videos_images_gifs",
            "presskit":"https://www.spacex.com/sites/spacex/files/stp-2_press_kit.pdf",
            "article_link":"https://spaceflightnow.com/2019/06/25/falcon-heavy-launches-on-military-led-rideshare-mission-boat-catches-fairing",
            "wikipedia":"https://en.wikipedia.org/wiki/Space_Test_Program",
            "video_link":"https://youtu.be/WxH4CAlhtiQ",
            "youtube_id":"WxH4CAlhtiQ",
            "flickr_images":[
               "https://live.staticflickr.com/65535/48129211778_83c1769305_o.jpg",
               "https://live.staticflickr.com/65535/48129211908_8390c775b0_o.jpg",
               "https://live.staticflickr.com/65535/48129182836_fd53e5646b_o.jpg",
               "https://live.staticflickr.com/65535/48129269897_22d854be5c_o.jpg",
               "https://live.staticflickr.com/65535/48129182631_572051790c_o.jpg",
               "https://live.staticflickr.com/65535/48129211693_d23b0287f1_o.jpg",
               "https://live.staticflickr.com/65535/48129269942_eb9b5c25bc_o.jpg"
            ]
         },
         "details":"Space Test Program 2 is a rideshare managed by the U.S. Air Force Space and Missile Systems Center (SMC), launching from LC-39A, KSC. Most of the spacecraft will be delivered into low Earth orbit (LEO) in two deployment sequences separated by a second stage burn. These LEO payloads include the six Taiwan and United States owned COSMIC-2 microsatellites, the Planetary Society's LightSail-B demonstrator cubesat, and others. The third and final deployment will be the Air Force Research Lab's DSX spacecraft, which will be delivered to a medium Earth orbit (MEO). This mission will reuse the side cores from Arabsat 6A, which will return to LZ-1, and LZ-2. The new center core will boost back to land on OCISLY less than 40 km from the launch site.",
         "upcoming":false,
         "static_fire_date_utc":"2019-06-19T21:52:00.000Z",
         "static_fire_date_unix":1560981120,
         "timeline":{
            "webcast_liftoff":null,
            "go_for_prop_loading":-3180,
            "stage1_rp1_loading":-3000,
            "stage1_lox_loading":-2700,
            "stage2_rp1_loading":-2100,
            "stage2_lox_loading":-1110,
            "engine_chill":-420,
            "prelaunch_checks":-90,
            "propellant_pressurization":-60,
            "go_for_launch":-45,
            "ignition":-2,
            "liftoff":0,
            "maxq":42,
            "beco":147,
            "side_core_sep":151,
            "side_core_boostback":169,
            "meco":207,
            "center_stage_sep":211,
            "second_stage_ignition":218,
            "fairing_deploy":243,
            "side_core_entry_burn":433,
            "seco-1":518,
            "side_core_landing":521,
            "center_core_entry_burn":533,
            "center_core_landing":681,
            "payload_deploy":775,
            "second_stage_restart":12447,
            "seco-2":780,
            "seco-3":7684,
            "seco-4":12483
         },
         "crew":null
      }
   ]
   service.getAll().subscribe((res) => {
     expect(res).toEqual(data);
   });

  });

});
