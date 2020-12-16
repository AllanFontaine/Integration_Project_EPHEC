from rest_framework.views import exception_handler
from rest_framework.response import Response

def custom_exception_handler(exc, context):

    handlers = {
        'ValidationError': _handle_generic_error,
        'Http404': _handle_generic_error,
        'PermissionDenied': _handle_generic_error,
        'NotAuthenticated': _handle_authenticated_error
    }

    response = exception_handler(exc, context)

    if response is not None:
        response.data['status_code'] = response.status_code

    exception_class = exc.__class__.__name__

    if exception_class in handlers:
        return handlers[exception_class](exc, context, response)
    return response

def _handle_authenticated_error(exc, context, response):

    response.data = {
        'error': 'Please login to proceed',
        'status_code': response.status_code
    }

    return response

def _handle_generic_error(exc, context, response):
    print(response)
    print(exc)
    if response is None:
        return Response(exc, status=400)
    return response