<?php

namespace App\Http\Controllers\Api;

use App\Models\Appointment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\JsonResponse;

class AppointmentController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'message' => 'required|string|min:10|max:1000',
            'preferred_date' => 'nullable|date|after:today',
            'preferred_time' => 'nullable|date_format:H:i',
            'service_type' => 'required|in:individual,couple,online'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation errors',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $appointment = Appointment::create([
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'message' => $request->message,
                'preferred_date' => $request->preferred_date,
                'preferred_time' => $request->preferred_time,
                'service_type' => $request->service_type,
                'ip_address' => $request->ip(),
                'user_agent' => $request->userAgent()
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Заявка успешно отправлена! Я свяжусь с вами в ближайшее время.',
                'data' => $appointment
            ], 201);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Ошибка при отправке заявки. Пожалуйста, попробуйте позже.'
            ], 500);
        }
    }

    public function index(Request $request): JsonResponse
    {
        $appointments = Appointment::orderBy('created_at', 'desc')->get();

        return response()->json([
            'success' => true,
            'data' => $appointments
        ]);
    }
}