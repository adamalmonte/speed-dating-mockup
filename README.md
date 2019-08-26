# Speed Dating

This is a mockup for what the registration form for a Speed Dating event might look like. After registration, users would then be sent a Preference form where they would rank their potential dates from 1-50. 

The event itself would ideally maximize the amount of dates each person had, and maximize their attraction based on rankings, hobbies, age and age preferences, career path, and location.

## Proposed algorithm for determining Preference Form results

Populating a person's match list for the Preference form would solely be based on finding the intersection between everyone's gender identity and sexual orientation - if 3 men indicated that they are interested in men and women, they would all be shown the exact same match list. While one could make an argument for using a person's preferred age range to limit who appears in the Preference form, I think it would be better to let people use their own judgment. If someone who is 26 indicates that the youngest age they'd date is 24, but they see the profile of someone who is 23 and they feel would be a good match, they might bend their own rules, so to speak.

## Proposed algorithm for determining how to pair participants for the event

An algorithm to determine how to match people on the day of gets tricky. Ranking should have the highest weighting, such that if Bob and Alice rank each other first, they should be paired together the day of. If Charlie ranks Alice first, and Alice ranks Charlie fourth, they should still likely be paired together. 

After pairing Top 10s as much as possible, age would come into play - if Charlie ranked someone outside of his preferred age range #37, he should definitely not be matched with them as they now have two major factors against them. The next thing to consider would be an intersection in hobbies. If Dennis ranks Alice first, and Alice ranks Dennis 24th, but they both like wakeboarding, and no one else does, they should be matched together. Finally, geographic location should be used to determine the last few rankings as it is the bare minimum two people might have in common.

For a 3 hour event, one could safely say everyone would have between 5-10 dates, so geographic location is more of a last resort.

