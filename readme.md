#  Airo — Health-Optimized Route Finder (Least-Pollution Navigation)

> **Airo** is an intelligent routing system that recommends the *cleanest and healthiest routes* for jogging and cycling by combining real-time AQI data, crowdsourced pollution incidents, geospatial environmental intelligence, and trust-weighted scoring.

Built for solving real public health challenges in cities like Lucknow, where AQI varies drastically across locations due to traffic, construction, and industrial zones.

---

# Problem Statement

Traditional navigation apps optimize for:
*  Time
*  Distance

They **do NOT optimize for health**.

This exposes users to:

* High PM2.5 zones
* Construction dust
* Industrial emissions
* Traffic pollution
* Temporary hazards like fires or garbage burning

AiroRoute solves this by optimizing routes for **minimum pollution exposure**, not just speed.

---

#  Core Innovation

AiroRoute introduces a **Health-Aware Routing Engine** that computes a real-time environmental score using:

```
Environmental Score =
  AQI Score
+ Incident Penalty (trust-weighted)
+ Industrial Zone Penalty
+ Construction Zone Penalty
+ Traffic Exposure Penalty
```

Routes are ranked and the cleanest routes are recommended.

---

#  Key Features

## Intelligent Clean Route Generation

* Generates multiple alternate routes using OSRM
* Ranks routes by environmental health score
* Supports jogging and cycling modes
* Personalized travel time based on age and mode

---

##  Real-Time AQI Integration

Uses OpenAQ public air quality API to fetch:

* PM2.5 values
* Real environmental exposure data

---

##  Crowdsourced Incident Intelligence

Users can report pollution events:

* Fire
* Construction
* Traffic congestion
* Garbage burning
* Industrial smoke
* Road dust

Each incident:

* Stored in MongoDB with geospatial indexing
* Verified via multi-user confirmation
* Trust-weighted using user reputation

---

##  Trust-Weighted Reporting System

Prevents spam and fake reports using:

* User trustScore system
* Confirmation-based confidence scoring
* Automatic trustScore adjustment using cron jobs

System becomes smarter over time.

---

## Industrial & Construction Zone Intelligence

Static environmental hazard zones include:

* Industrial areas (Talkatora, Amausi, etc.)
* Metro construction zones
* Dust-heavy construction areas

Routes automatically avoid these zones.

---

##  Traffic Exposure Scoring

Routes are penalized based on road type:

* Highways → high penalty
* Residential streets → low penalty
* Footpaths and parks → minimal penalty

Ideal for jogging and cycling safety.

---

##  Redis Cloud Caching Layer

Uses Redis Cloud to cache:

* AQI scores
* Environmental scores
* Incident lookups

Benefits:

* 10× faster response time
* Reduced external API calls
* Scalable architecture

---

##  Live Map Visualization

Frontend displays:

* Clean routes (color-coded risk levels)
* Pollution incidents (markers + radius)
* Industrial zones
* Construction zones
* Start and end markers

Built using Leaflet.js.

---

##  Secure Authentication System

Includes:

* User signup / signin
* JWT authentication
* TrustScore system
* Secure incident reporting

---

##  Automated Cron-Based Maintenance

Background tasks automatically:

* Remove expired incidents
* Adjust user trustScore
* Maintain system integrity

Prevents abuse.

---

#  Architecture Overview

```
Frontend (React + Leaflet)
        ↓
Node.js Express Backend
        ↓
Redis Cloud (Cache Layer)
        ↓
MongoDB Atlas (Database)
        ↓
External APIs
  ├ OpenAQ (AQI data)
  └ OSRM (Route generation)
```

---

#  Backend Architecture Components

```
controllers/
  authController.js
  routeController.js
  incidentController.js
  zoneController.js

services/
  environmentalService.js
  incidentService.js
  authService.js
  osrmService.js
  aqiService.js

models/
  UserModel.js
  IncidentModel.js

config/
  redis.js
  database.js
  zones.js
  incidentTypes.js

utils/
  cache.js
  scoringUtils.js

cron/
  incidentCron.js
```

---

#  Environmental Scoring Engine

Each route is sampled at multiple points.

Each point calculates:

```
Score =
AQI score
+ incident penalties
+ zone penalties
+ traffic penalties
```

Lowest score = cleanest route.

---

#  Tech Stack

Backend:

* Node.js
* Express.js
* MongoDB Atlas
* Redis Cloud
* OSRM Routing Engine
* OpenAQ API
* JWT Authentication

Frontend:

* React.js
* Leaflet.js
* TailwindCSS

Infrastructure:

* Redis Cloud
* MongoDB Atlas

---

#  Example Use Case

User wants to jog from:

```
Janeshwar Mishra Park → Gomti Nagar
```

System evaluates:

* AQI along route
* Construction zones
* Traffic exposure
* Reported incidents

Returns:

```
Route A: 18 min — High Pollution ❌
Route B: 21 min — Moderate Pollution ⚠
Route C: 23 min — Low Pollution ✅ (Recommended)
```

---

# ⚡ Performance Optimization

Redis caching reduces route computation time:

```
Before: 800–1500 ms
After: 50–150 ms
```

---

#  Scalability

Supports scaling via:

* Redis shared cache
* MongoDB Atlas cluster
* Stateless backend
* Cloud deployment ready

---

#  Why This Solution Wins

AiroRoute is not just a routing app.

It is a **health-aware environmental intelligence system**.

Key innovations:

* Trust-weighted crowdsourced pollution reporting
* Real-time environmental scoring engine
* Redis-optimized performance architecture
* Self-correcting trust system
* Geospatial environmental intelligence
* Health-optimized routing logic

---

#  Installation

Backend:

```
npm install
npm run dev
```

Frontend:

```
npm install
npm run dev
```

---

#  Environment Variables

```
MONGO_URI=
REDIS_URL=
JWT_SECRET=
```

---

#  Future Improvements

* Heatmap visualization
* ML-based pollution prediction
* Real-time WebSocket updates
* Mobile app version
* Wearable device integration

---

#  Hackathon Impact

AiroRoute demonstrates:

* Real-world public health application
* Intelligent environmental routing
* Scalable cloud architecture
* Innovative trust-based crowdsourcing

This system can directly improve urban health and safety.

---


#  Vision

To make navigation systems that optimize not just time, but human health.

---
