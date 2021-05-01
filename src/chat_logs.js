

const henry_chats = [
    <p>Hi! I'm Henry, your personal trainer specialist.</p>,
    <p>Nice work deciding to consolidate your retirement accounts. Choosing the right account can be hard. Luckily, I'm here to help!</p>,
    <p>Tell me, do you have at least 6 months of personal savings outside of your retirement accounts?</p>,
    <p>Some retirement plans allow you to take out loans. Is this feature important to you?</p>,
    <p>There are 2 types of investors:</p>,
    <p><b>Active</b> investors prefer to frequently monitor their investment choices, adjust allocations, and follow the market.</p>,
    <p><b>Passive</b> investors like their investments to be managed for them.</p>,
    <p>Which one best describes you?</p>,
    <p>We are required by your provider to collect some identity information</p>,
    <p>What is your Date of Birth?</p>,
    <p>Thank you for walking me through your preferences, this will make it much easier for us to choose the right destination for you</p>
]

const answer_state = [3, 4, 8, 10,11]

const answer_prompt = {
    3: ["Yes", "No"],
    4: ["Yes", "Not Really"],
    8: ["Active", "Passive"],
    10: ["Confirm", "Date of Birth"],
    11: ["Continue"]
}

export {henry_chats, answer_state, answer_prompt}