function getDayOfWeek(date: Date): string {
    const daysOfWeek = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
}