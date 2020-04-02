---
layout: post
title: "SDP 2020: WeatherBox"
tags: [C, STM32, Networking, Python, Azure, Flask, HTTP, HTML, JS, CSS, Google Maps, Google Sign-In, API]
feature-img: "assets/img/portfolio/weatherbox/weatherbox_header.jpg"
img: "assets/img/portfolio/weatherbox/weatherbox.jpg"
date: 2020-04-01
---

Weather Box is a low-cost, low-power weather sensing solution that sends weather data to a web server on Microsoft Azure. Created for UMass ECE Senior Design Project 2020.

<a href = "http://www.ecs.umass.edu/ece/sdp/sdp20/team03/">Senior Design Project Website</a>

<a href = "http://weatherbox.azurewebsites.net/">Azure Website</a>

### Team
* Advisor: <a href = "https://www.linkedin.com/in/michael-zink-a7b830/">Professor Michael Zink</a>
* Software Lead: <a href = "https://www.linkedin.com/in/anthonymendez-/">Anthony Mendez</a>
* Hardware Lead: <a href = "https://www.linkedin.com/in/tina-maurer-a22843176/">Tina Maurer</a>
* Communications: <a href = "https://www.linkedin.com/in/stephan-kim-70ba6913a/">Stephan Kim</a>
* Website and Interpolation: <a href = "https://www.linkedin.com/in/christian-norton-b65250131/">Christian Nortan</a>

### Abstract

As part of pre-flight preparations, drone operators must check the local weather conditions to ensure a safe and successful flight. While commercial weather stations can effectively collect data for a specified area at the macroscale, weather conditions in that area at the microscale can vary greatly. Since flight conditions can be greatly affected by these constraints, drone operators need a more accurate localized weather map reading for the area of flight. Weather Box will create this localized map in a network of battery powered sensor modules to provide drone users with the required information via a website and application. Our product will allow operators to quickly decide whether the conditions are suitable for safe drone flight.

### Development

Development of the project was broken up into four main sections quarters. Preliminary Design Review, Midway Design Review, Cumulative Design Review, and Final Design Review.

The majority of this section is written from my perspective and meant to be reflective of my own work. So any deep technical insight, especially on the hardware side should not be expected.

#### Preliminary Design Review

When we were coming up with a project idea, we didn't know what route or domain we wanted to go in.

[Professor Christopher Hollot](https://www.linkedin.com/in/christopher-hollot-2651a86/) let us know in an email with a few projects that some researchers and companies in our department had. So we talked to one of the researchers about their project. The researcher we talked to was [Apoorva Bajaj](https://www.linkedin.com/in/apoorva-bajaj-abb57b3/). His project was something along the lines of figuring out weather, more specifically wind speed and direction, before deploying an drone for emergency operations. This information is critical in knowing whether not conditions were safe for a drone to fly in.

Of course, for Senior Design Project, this project presented a few challenges. How can we accurately measure wind speed and direction? How can we test this out with a drone when none of us have any drone flying experience or an FAA license?

In the end, we decided to scale back the project, and make our project more general purpose. We came up with the following design:

![PDR Block Diagram](/assets/img/portfolio/weatherbox/pdr_block_diagram.png)

First off, the sensors. We intended to use the following sensors: 

* [Bosch BME280 Temperature Pressure and Humidity Sensor](https://www.bosch-sensortec.com/products/environmental-sensors/humidity-sensors-bme280/)
* [SHARP GP2Y1010AU0F Dust Sensor](https://www.sparkfun.com/products/9689)
* [ams AG CCS811B-JOPD Air Quality Sensor](https://ams.com/ccs811)
* [Modern Device Wind Sensor Rev. P Thermal Anemometer](https://moderndevice.com/product/wind-sensor-rev-p/)

Each of the sensors are capable of measuring at a sampling rate of 1 measurement every 10 seconds. The sensors were cheap as well, costing an estimated $50 for a set.

Next is the power source. We were planning on using a solar cell along with a battery to charge and power our system. We estimated it would've cost about $30. We had no specific battery or solar cell in mind.

For our microcontroller, we decided to go with an STM32 microcontroller. More specifically, the [STM32L073RZ](https://www.st.com/en/microcontrollers-microprocessors/stm32l073rz.html) microcontroller. STM32 also provides development boards called Nucleo boards. So we used the [NUCLEO-L073RZ](https://www.st.com/en/evaluation-tools/nucleo-l073rz.html) for initial development and testing. We chose STM32 because Tina has experience using these microcontrollers from her work experience. We narrowed down to the L073RZ for its expanded flash memory, and it's low power draw. The development boards are cheap, going for around $12, while the microcontrollers themselves go around $5.

In order to transmit our data, we needed a Wi-Fi module. We decided on the [Espressif Systems ESP8266](https://www.sparkfun.com/products/13678) module. The ESP8266 is a popular choice in the Arduino community, and it's relatively easy to program for. One module costs about $7.

On the web server side, we decided to go with Microsoft's Azure to host our website. They offer discounted and free resources for student, and a quick and easy setup for web applications. We decided to go for the Python library Flask for the web server since it is easy to prototype with and it is an extensive library with documentation.

For Midway Design Review, we promised these deliverables:

* Two sensor packages capable of measuring simulated wind speed, temperature, and barometric pressure (including protoboard for custom sensor PCB)
* Basic weather map created by the two sensor packages in a small and simulated test environment
* UI able to display raw data from Weather Boxes to remote server terminal

We provided these as the initial System Specifications:

* Each unit will take measurement at its location and the web server must create a map of at least 150x50 m2 based on data from sensor packages
* Each sensor package must be mountable and weigh less than one pound
* System must measure wind, temperature, barometric pressure, humidity, dust, and air quality
* Battery life of combined solar cell and backup battery of at least 24 hours
* System must be operable in the range of 20 degrees Fahrenheit to 100 degrees Fahrenheit
* Be able to transmit weather measurements wirelessly to a user interface
* Each unit must be manufacturable for at most $120

We also provided an overall project stretch goal that we want to mounta Weather Box to a drone for real time weather conditions at different altitudes. If we were to go this route, we would focus more on the public safety aspect, such as helping police decide if conditions are suitable for a drone mission.

![Drone Image Here!](/assets/img/portfolio/weatherbox/drone_photoshop.jpg)

#### Midway Design Review

After Preliminary Design Review, we modified our solution going forward based off some recommendations of our reviwers.

![MDR Block Diagram](/assets/img/portfolio/weatherbox/mdr_block_diagram.png)

We decided to remove the solar cell from the power system to simplify designing the power circuitry. As well as change some of our System Specifications

* Each sensor package will take measurement at its location and the web server must create a map of at least 75x50 m2 based on data from sensor packages
* Each sensor package must be mountable and weighs less than one pound
* Each sensor package must measure wind, temperature, barometric pressure, humidity, dust, and air quality with 95% confidence
* Each sensor package must have a battery life of at least 24 hours
* Sensor package must be operable in the range of 20 degrees Fahrenheit to 100 degrees Fahrenheit
* Each sensor package should be able to transmit sensor data to a web server via WiFi
* Each sensor package must be manufacturable for at most $120

We downsized the size of the map to 75 x 50 meters squared. We added in a confidence interval for to hit achieve some amount of accuracy. Removed any mention of the solar cell. And finally, specified it will transmit data over Wi-Fi. Because of this, we also changed our deliverables to better match the system specifications.

* Two fixed point development sensor boards that measure temperature, air pressure, humidity, and wind speed
    * Temperature between 30°F - 80°F with 95% confidence
    * Air pressure between 1.00atm - 0.96atm with 95% confidence
    * Humidity between 0% - 100% with 95% confidence
    * Wind speed between 0mph - 50mph with 95% confidence
* The sensor package will be powered by a battery
* Map displaying the location and data points of each sensor package

With this, we began work on the prototype. Tina set to work designing the power circuitry. I went ahead 

![MDR Block Diagram Prototype](/assets/img/portfolio/weatherbox/mdr_block_diagram_prototype.png)

![MDR Outdoor Test](/assets/img/portfolio/weatherbox/mdr_test_outdoor.png)

#### Cumulative Design Review

#### Final Design Review

### Links

* [UMass ECE Senior Design Project Team Website](http://www.ecs.umass.edu/ece/sdp/sdp20/team03/)

* [Project Website on Azure](http://weatherbox.azurewebsites.net/)

* [STM32L073RZ Microcontroller](https://www.st.com/en/microcontrollers-microprocessors/stm32l073rz.html)

* [NUCLEO-L073RZ Microcontroller Development Board](https://www.st.com/en/evaluation-tools/nucleo-l073rz.html)

* [Bosch BME280 Temperature Pressure and Humidity Sensor](https://www.bosch-sensortec.com/products/environmental-sensors/humidity-sensors-bme280/)

* [SHARP GP2Y1010AU0F Dust Sensor](https://www.sparkfun.com/products/9689)

* [ams AG CCS811B-JOPD Air Quality Sensor](https://ams.com/ccs811)

* [Modern Device Wind Sensor Rev. P Thermal Anemometer](https://moderndevice.com/product/wind-sensor-rev-p/)

* [Espressif Systems ESP8266](https://www.sparkfun.com/products/13678)

* [Professor Michael Zink](https://www.linkedin.com/in/michael-zink-a7b830/)

* [Anthony Mendez](https://www.linkedin.com/in/anthonymendez-/)

* [Tina Maurer](https://www.linkedin.com/in/tina-maurer-a22843176/)

* [Stephan Kim](https://www.linkedin.com/in/stephan-kim-70ba6913a/)

* [Christian Nortan](https://www.linkedin.com/in/christian-norton-b65250131/)

* [Professor Christopher Hollot](https://www.linkedin.com/in/christopher-hollot-2651a86/)

* [Researcher Apoorva Bajaj](https://www.linkedin.com/in/apoorva-bajaj-abb57b3/)