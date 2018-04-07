function roundToHour(date) {
  p = 60 * 60 * 1000; // milliseconds in an hour
  return new Date(Math.round(date.getTime() / p ) * p);
}

bac_descriptions = {
    0: "No noticeable effect.",
    0.02: "No loss of coordination, slight euphoria and loss of shyness. Depressant effects are not apparent. \
    Mildly relaxed and maybe a little lightheaded. Your inhibitions are slightly loosened, and whatever mood \
    you were in before you started drinking may be mildly intensified. Your behavior may become exaggerated, \
    making you talk louder or faster or act bolder than usual.",
    0.04: "Feeling of well-being, relaxation, lower inhibitions, sensation of warmth. Euphoria. Some minor \
    impairment of reasoning and memory, lowering of caution. Your behavior may become exaggerated, making you \
    talk louder or faster or act bolder than usual.  Emotions are intensified, so your good moods are better and \
    your bad moods are worse.",
    0.06: "Judgment, perception, and information processing are becoming impaired. You are less able to make \
    good judgments, and are more likely to misperceive situations and to take unwise risks. ",
    0.07: "Slight impairment of balance, speech, vision, reaction time, and hearing. Euphoria. \
    Judgment and self-control are reduced, and caution, reason and memory are impaired. You will probably \
    believe that you are functioning better than you really are.",
    0.08: "You believe you're functioning better than you actually are. You may start to slur your speech, \
    your sense of balance is off, and your motor skills are starting to become impaired. Your ability to see and \
    hear clearly is diminished. Your judgment is being affected, so it's difficult for you to decide whether or \
    not to continue drinking. Your ability to evaluate sexual situations is impaired. You are more likely to \
    take risks that you would not take when sober, and are unable to judge accurately your ability to drive.",
    0.10: "At this level, you feel euphoric. Significant impairment of motor coordination and loss of good \
    judgment. Speech may be slurred; balance, peripheral vision, reaction time, and hearing will be impaired. \
    You probably don't remember how many drinks you've had. Your emotions are exaggerated, and some people \
    become loud, aggressive, or belligerent.",
    0.13: "Gross motor impairment and lack of physical control. Blurred vision and major loss of balance. \
    Euphoria is reduced and dysphoria (a state of feeling unwell, characterized by anxiety, restlessness) is \
    beginning to appear. Judgment and perception are severely impaired.",
    0.16: "Your euphoric feelings may give way to unpleasant feelings. You have difficulty talking, walking, or \
    even standing. Your judgment and perception are severely impaired. You may become more aggressive, and \
    there is an increased risk of accidentally injuring yourself or others. This is the point when you may \
    experience a blackout. Vomiting may occur in normal drinkers. Balance and coordination are normally \
    impaired. Heavy drinkers may learn to appear sober at this level, but are in fact intoxicated.",
    0.18: "Dysphoria (anxiety, restlessness) predominates. You have difficulty talking, walking, or even \
    standing. Your judgment and perception are severely impaired. You may become more aggressive, and there\
    is an increased risk of accidentally injuring yourself or others. You may experience a blackout, and \
    vomiting may occur. Balance and coordination are normally impaired. Heavy drinkers may learn to appear \
    sober at this level, but are in fact intoxicated.",
    0.20: "You​'re feeling dazed, confused, or otherwise disoriented, and experiencing a high degree of \
    dysphoria. You likely need assistance in walking. If you injure yourself you may not feel the pain. If \
    you are aware you've injured yourself, chances are you won't do anything about it. Blackouts, as well \
    as nausea and vomiting, are likely at this level. The gag reflex is impaired and you can choke if \
    you do vomit.",
    0.25: "All mental, physical, and sensory functions are severely impaired. You're emotionally numb. \
    Increased risk of asphyxiation from choking on vomit and of seriously injuring yourself by falls or \
    other accidents.",
    0.30: "Alcohol poisoning and stupor. You have little comprehension of where you are. You may suddenly \
    pass out at this point and be difficult to awaken.",
    0.35: "Alcohol poisoning. This is the level of surgical anesthesia. You may stop breathing at this point.\
    Coma is possible. ",
    0.40: "Alcohol poisoning. Onset of coma. The nerve centers controlling your heartbeat and respiration \
    are slowing down. There is a real possibility of death due to respiratory arrest."
}

module.exports = {
	roundToHour: roundToHour,
};
