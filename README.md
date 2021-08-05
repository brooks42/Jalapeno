![Jalapeno banner](/jalapeno/public/banner_logo.png)

# Jalapeno

Automated garden project

# Service

The garden system is composed of a collection of sensors that send data to the main "jalapeno" hub. The system also supports rules (ITTT support in the future?) for things like maintaining moisture levels with automatic water sprayers.

## System

Gardening system is composed of a centralized server running locally, with several sensors running on the local system and communicating the central server using REST.

The system tracks information from sensors over time, and can use user-defined rules from sensors to cause Actors to act.

## Sensors

A `sensor` is any part of the jalapeno infrastructure that provides data to the server. For example, a sensor could be a hygrometer buried in some soil.

## Actors

An `actor` is a device that listens for commands from the server and acts on those commands. An example of an actor is a water sprinkler that fires when triggered by the server, for example because of low soil humidity.

# Front

TBD

# Running the entire project

See [this readme](/jalapeno/README.md)
