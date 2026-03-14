# Water Safety Checker

## Overview

The **Water Safety Checker** is a simple web-based application that helps determine whether water is safe for drinking based on the concentration of harmful heavy metals. Users can enter mineral values for a specific location, and the system evaluates whether the water is safe according to predefined safety thresholds.

The application also marks the entered location on a map to visualize areas where water contamination may exist.

---

## Problem Statement

Water contamination caused by heavy metals is a major environmental and health issue. Many people do not have access to tools that quickly evaluate whether water is safe to drink.

This project provides a simple interface where users can input mineral concentrations, and the system analyzes the safety level of the water.

---

## Features

* Input heavy metal concentrations in water
* Evaluate water safety based on threshold limits
* Display clear safety results (Safe / Unsafe)
* Mark the location on a map
* Easy-to-use interface

---

## Heavy Metals Considered

The system checks for the following heavy metals:

| Metal        | Health Risk             |
| ------------ | ----------------------- |
| Lead (Pb)    | Neurological damage     |
| Mercury (Hg) | Brain and kidney damage |
| Arsenic (As) | Cancer risk             |
| Cadmium (Cd) | Kidney damage           |

---

## Example Input

Location: Nellore

Lead: 56 µg/L
Mercury: 28 µg/L
Arsenic: 63 µg/L
Cadmium: 90 µg/L

Output:

**Unsafe to Drink ❌**

---

## How It Works

1. The user enters the place name and heavy metal concentrations.
2. The system compares these values with predefined safe drinking water limits.
3. If any value exceeds the safe limit, the water is marked **Unsafe to Drink**.
4. The location is displayed on a map to visualize the area.

---

## Technologies Used

* HTML
* CSS
* JavaScript
* Map API

---

## Future Improvements

* Integration with real-time water quality datasets
* Machine learning based contamination prediction
* Mobile application version
* IoT-based water sensor integration

---

## Author

**Naga Hasmitha**
B.Tech CSE (Artificial Intelligence)
Amrita Vishwa Vidyapeetham
